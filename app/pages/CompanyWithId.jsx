import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from "../actions/companyActions";
import {fetchProfileTradesByCompany} from "../actions/tradesActions";
import {browserHistory} from "react-router";
import "./Detailed.css";

class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const id = this.props.params.companyWithId;
    if (id.slice(0, 3) === "ca_") {
      this.props.fetchCompany(id);
      this.props.fetchProfileTradesByCompany(id);
    } else {
      this.props.fetchCompany(id);
      this.props.fetchProfileTradesByCompany(id);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.companyWithId !== newProps.params.companyWithId) {
      const id = newProps.params.companyWithId;
      this.props.fetchCompany(id);
      this.props.fetchProfileTradesByCompany(id);
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

    let coverImage = {
      backgroundImage: `url(${company.cover_image})`
    };
    if(!company.cover_image) {
      const country = company.Country
        console.log(country , "cc")
      if(country) {
        const countryId = country.flickr_link ? country.id : country.id.slice(0,2);
        console.log(countryId , "ID");
        coverImage = {
          backgroundImage: `url(/images/country/${countryId}.jpg)`
        };
      }
    }

    const profileImage = {
      backgroundImage: `url(${company.profile_image})`,
      opacity:1
    };
    console.log(this.props.trades, "TRADDDESS");
    const connectamericas = this.props.params.companyWithId.slice(0, 3) === "ca_";

    return (
      <div className="detailed-content-wrapper company">
        <Sidebar>
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <div className="profile-image background-image" style={profileImage}></div>
            </div>
            <img className="icon" src="/images/icons/icon-company-white.svg"/>
            <h3>{company.name}</h3>
          </div>
          {this.props.trades
            ? <div className="products">
                <div className="imports">
                  <div className="section-wrapper">
                    <h5>Products | Imports</h5>
                    <div className="yellow-line"></div>
                    {trades.imports
                      ? <div>{Object.keys(trades.imports).map((trade, index) => {
                            const id = trades.imports[trade].id.slice(0, 2);
                            return (
                              <Link key={index} to={`/product/${trade}`}>
                                <div className="product-wrapper">
                                  <div className={`icon-wrapper color-${id}`}>
                                    <img src={`/images/product_icon/hs_${id}.png`}></img>
                                  </div>
                                  <div className="colored-wrapper">
                                    <div className={`darker-color color-${id}`}></div>
                                    <p>{trades.imports[trade].name}</p>
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
                    <h5>Products | Exports</h5>
                    <div className="yellow-line"></div>
                    {trades.exports
                      ? <div>{Object.keys(trades.exports).map((trade, index) => {
                            const id = trades.exports[trade].id.slice(0, 2);
                            return (
                              <Link key={index} to={`/product/${trade}`}>
                                <div className="product-wrapper">
                                  <div className={`icon-wrapper color-${id}`}>
                                    <img src={`/images/product_icon/hs_${id}.png`}></img>
                                  </div>
                                  <div className="colored-wrapper">
                                    <div className={`darker-color color-${id}`}></div>
                                    <p>{trades.exports[trade].name}</p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      : null}
                  </div>
                </div>
                <div className="coverage">
                  <div className="section-wrapper">
                    <h5>Coverage Area</h5>
                    <div className="yellow-line"></div>
                    {trades.countries
                      ? <div>
                          {Object.keys(trades.countries).map((country, index) => {
                            const continentId = country.slice(0, 2);
                            const colorName = `color-${trades.countries[country].continent.toLowerCase().replace(" ", "-")}`;
                            return (
                              <Link key={index} to={`/country/${country}`}>
                                <div className="product-wrapper">
                                  <div className={`icon-wrapper ${colorName}`}>
                                    <img src={`/images/flags/country_${continentId}.png`}></img>
                                  </div>
                                  <div className="colored-wrapper">
                                    <div className={`darker-color ${colorName}`}></div>
                                    <p>{trades.countries[country].name}</p>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}</div>
                      : null}
                  </div>
                </div>
                <button>
                  <img className="button-icon" src="/images/icons/icon-mail.svg"/>
                  Get In Touch
                </button>
              </div>
            : null}
        </Sidebar>
        <div className="center-content">
          <div className="header-image-wrapper">
            <div className={connectamericas ? "background-image ca-background-image" : "background-image" } style={connectamericas
              ? profileImage
              : coverImage}></div>
            <div className="image-overlay-wrapper">
              <div className="image-overlay"></div>
              <div className="text-wrapper">
                <div className="section-wrapper">
                  {company.address
                    ? <div><img src="/images/icons/icon-country-yellow.svg"/>
                        <p>{company.address}</p>
                      </div>
                    : null}
                </div>
                <div className="section-wrapper">
                  {company.phone_number
                    ? <div>
                        <img src="/images/icons/icon-telephone-yellow.svg"/>
                        <p>{company.phone_number}</p>
                      </div>
                    : null}
                </div>
                <div className="section-wrapper">
                  {company.website
                    ? <div>
                        <img src="/images/icons/icon-world-yellow.svg"/>
                        <a rel="external" href={`http://${company.website}`}><p>{company.website}</p></a>
                      </div>
                    : null}
                </div>
                <div className="section-wrapper">
                  <button><img className="button-icon" src="/images/icons/icon-mail.svg"/>Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
          <div className="description-wrapper">
            <h3>Company Description</h3>
            <p>{company.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCompany: id => {
    dispatch(fetchCompany(id));
  },
  fetchProfileTradesByCompany: id => {
    dispatch(fetchProfileTradesByCompany(id));
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
