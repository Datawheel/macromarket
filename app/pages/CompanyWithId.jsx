import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchData} from "datawheel-canon";
import {url} from "../api";
import {fetchProfileTradesByCompany} from "../actions/tradesActions";
import CompanyHeader from "../components/CompanyHeader";
import "./Detailed.css";

import Helmet from "react-helmet";
import header from "../helmet.js";

class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const slug = this.props.params.companySlug;
    if (slug.slice(0, 3) !== "ca_") {
      this.props.fetchProfileTradesByCompany(slug);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.companySlug !== newProps.params.companySlug) {
      const slug = newProps.params.companySlug;
      if (slug.slice(0, 3) !== "ca_") {
        this.props.fetchProfileTradesByCompany(slug);
      }
      this.shouldUpdate = false;
    }
  }

  isEmptyObject = o => !o || Object.keys(o).every(x => o[x] === "" || o[x] === null || !o[x].length);

  render() {
    const {company, error, trades} = this.props;
    const {companySlug: slug} = this.props.params;

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    if (!company || (!company.activated && slug.slice(0, 3) !== "ca_")) {
      return (
        <div className="error-404">
          <div className="error-gif"></div>
          <p>OOPS! There's nothing here. But checkout the following pages that are here:</p>
        </div>
      );
    }

    const profileImage = {
      backgroundImage: `url(${company.profile_image})`,
      opacity: 1
    };

    const isConnectamericas = this.props.params.companySlug.slice(0, 3) === "ca_";

    return (
      <div className="detailed-content-wrapper company">
        <Helmet title={ `${ header.title } - ${ company.name }` } />
        <Sidebar>
          <div className="profile-info">
            { company.profile_image
              ? <div className="profile-image-wrapper">
                <div className="profile-image background-image" style={profileImage}></div>
              </div>
              : null }
            <h3>{company.name}</h3>
            <div className="description-wrapper">
              <p>{company.description}</p>
            </div>
          </div>
        </Sidebar>

        <div className="center-content">
          <CompanyHeader company={company} profileImage={profileImage}  connectamericas={isConnectamericas}/>

          <div className="content-wrapper">

            {!this.isEmptyObject(trades)
              ? <div className="products">
                <div className="imports">
                  <div className="section-wrapper">
                    <h3>Products Imported</h3>
                    <div className="yellow-line"></div>
                    {trades.imports
                      ? <div>{trades.imports.map((trade, index) => {
                        const id = trade.id.slice(0, 2);
                        return (
                          <Link key={index} to={`/product/${trade.id}`}>
                            <div className="product-wrapper">
                              <div className={`icon-wrapper color-${id}`}>
                                <img src={`/images/product_icon/hs_${id}.png`}></img>
                              </div>
                              <div className="colored-wrapper">
                                <div className={`darker-color color-${id}`}></div>
                                <p>{trade.name}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      </div>
                      : null}
                  </div>
                </div>
                <div className="exports">
                  <div className="section-wrapper">
                    <h3>Products Exported</h3>
                    <div className="yellow-line"></div>
                    {trades.exports
                      ? <div>{trades.exports.map((trade, index) => {
                        const id = trade.id.slice(0, 2);
                        return (
                          <Link key={index} to={`/product/${trade.id}`}>
                            <div className="product-wrapper">
                              <div className={`icon-wrapper color-${id}`}>
                                <img src={`/images/product_icon/hs_${id}.png`}></img>
                              </div>
                              <div className="colored-wrapper">
                                <div className={`darker-color color-${id}`}></div>
                                <p>{trade.name}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      </div>
                      : <div className="result-wrapper no-companies">
                        <p>There are no companies listed. Be the first one!</p>
                        <Link to={"/settings/product"}>
                          <button className="list-company">List Your Company</button>
                        </Link>
                      </div>}
                  </div>
                </div>
                <div className="coverage">
                  <div className="section-wrapper">
                    <h3>Coverage Area</h3>
                    <div className="yellow-line"></div>
                    {trades.countries
                      ? <div>
                        {trades.countries.map((country, index) => {
                          const continentId = country.id.slice(0, 2);
                          const colorName = `color-${country.continent.toLowerCase().replace(" ", "-")}`;
                          return (
                            <Link key={index} to={`/country/${country.id}`}>
                              <div className="product-wrapper">
                                <div className={`icon-wrapper ${colorName}`}>
                                  <img src={`/images/flags/country_${continentId}.png`}></img>
                                </div>
                                <div className="colored-wrapper">
                                  <div className={`darker-color ${colorName}`}></div>
                                  <p>{country.name}</p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}</div>
                      : null}
                  </div>
                </div>
                {company.company_email
                  ? <a href={`mailto:${company.company_email}`}>
                    <button>
                      <img className="button-icon" src="/images/icons/icon-mail.svg"/>Get in Touch
                    </button>
                  </a> : null}
              </div>
              : !isConnectamericas
                ? <div className="pt-non-ideal-state">
                  <div className="pt-non-ideal-state-visual pt-non-ideal-state-icon">
                    <span className="pt-icon pt-icon-search"></span>
                  </div>
                  <h4 className="pt-non-ideal-state-title">No Products</h4>
                  <div className="pt-non-ideal-state-description">
                    This company hasn&apos;t selected any exports or imports yet.
                  </div>
                </div>
                : null}

            {company.catalog
              ? <div className="products">
                <div className="imports">
                  {company.catalog.map(industry =>
                    <div key={industry.id} className="section-wrapper">
                      <h3>{industry.name}</h3>
                      {industry.products_services.map(ps =>
                        <a key={ps.id} href={company.ca_link}>
                          <div className="link-wrapper">
                            <div className="icon-wrapper color-ca">
                              <img src="/images/icons/icon-ca.png" />
                            </div>
                            <div className="colored-wrapper">
                              <div className="darker-color color-ca"></div>
                              <p>{ps.product_alias_name}</p>
                            </div>
                          </div>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
              : null}

          </div>
        </div>
      </div>
    );
  }
}

CompanyWithId.preneed = [
  fetchData("company", `${url}/api/companies/<companySlug>`, res => res)
];

const mapDispatchToProps = dispatch => ({
  fetchProfileTradesByCompany: slug => {
    dispatch(fetchProfileTradesByCompany(slug));
  }
});

const mapStateToProps = state => ({
  company: state.data.company,
  error: state.companyProfile.error || null,
  trades: state.trades.profileTrades,
  tradesLoading: state.trades.loading,
  tradesError: state.trades.error
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
