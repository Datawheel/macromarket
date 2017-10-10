import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from "../actions/companyActions";
import {fetchProfileTradesByCompany} from "../actions/tradesActions";
import "./Detailed.css";
import CompanyHeader from "../components/CompanyHeader";
class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const slug = this.props.params.companySlug;
    if (slug.slice(0, 3) === "ca_") {
      this.props.fetchCompany(slug);
      this.props.fetchProfileTradesByCompany(slug);
    }
    else {
      this.props.fetchCompany(slug);
      this.props.fetchProfileTradesByCompany(slug);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.companySlug !== newProps.params.companySlug) {
      const slug = newProps.params.companySlug;
      this.props.fetchCompany(slug);
      this.props.fetchProfileTradesByCompany(slug);
      this.shouldUpdate = false;
    }
  }

  render() {
    const {company, loading, error, trades} = this.props;

    if (loading || !company) {
      return (
        <div className="detailed-content-wrapper company">
          <Sidebar></Sidebar>
          <div className="center-content">
            <div className="header-image-wrapper">
              <div className="background-image">
                <div className="image-overlay-wrapper">
                  <div className="image-overlay"></div>
                  <div className="text-wrapper"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    const profileImage = {
      backgroundImage: `url(${company.profile_image})`,
      opacity: 1
    };

    const connectamericas = this.props.params.companySlug.slice(0, 3) === "ca_";

    return (
      <div className="detailed-content-wrapper company">

        <Sidebar>
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <div className="profile-image background-image" style={profileImage}></div>
            </div>
            <h3>{company.name}</h3>
            <div className="description-wrapper">
              <p>{company.description}</p>
            </div>
            {company.ca_link
              ? <a href={company.ca_link}>
                <div className="link-wrapper">
                  <div className="icon-wrapper color-ca">
                    <img src="/images/icons/icon-ca.png" />
                  </div>
                  <div className="colored-wrapper">
                    <div className="darker-color color-ca"></div>
                    <p>ConnectAmericas</p>
                  </div>
                </div>
              </a>
              : null}
          </div>
        </Sidebar>

        <div className="center-content">
          <CompanyHeader company={company} profileImage={profileImage}  connectamericas={connectamericas}/>

          <div className="content-wrapper">

            {this.props.trades
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
              : <div>no company catalog!</div>}

          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCompany: slug => {
    dispatch(fetchCompany(slug));
  },
  fetchProfileTradesByCompany: slug => {
    dispatch(fetchProfileTradesByCompany(slug));
  }
});

const mapStateToProps = state => ({
  company: state.companyProfile.company,
  loading: state.companyProfile.loading,
  error: state.companyProfile.error || null,
  trades: state.trades.profileTrades,
  tradesLoading: state.trades.loading,
  tradesError: state.trades.error
});

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
