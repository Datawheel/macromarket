import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from "../actions/companyActions";
import {fetchTradesByCompany} from "../actions/tradesActions";
import companyIcon from "../img/icons/icon-company-white.svg";
import addressIcon from "../img/icons/icon-country-yellow.svg";
import phoneIcon from "../img/icons/icon-telephone-yellow.svg";
import worldIcon from "../img/icons/icon-world-yellow.svg";
import getInTouchIcon from "../img/icons/icon-mail.svg";
import {browserHistory} from "react-router";

class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);

    // determines if component needs to fetch new data for random company
    this.shouldUpdate = false;
    browserHistory.listen(location => {
      this.shouldUpdate = true;
    });
  }

  componentDidMount() {
    const id = this.props.params.companyWithId
    this.props.fetchCompany(id);
    this.props.fetchTradesByCompany(id);
  }


  componentWillUpdate() {
    if (this.shouldUpdate) {
      const id = this.props.params.companyWithId
      this.props.fetchCompany(id);
      this.props.fetchTradesByCompany(id);
      this.shouldUpdate = false;
    }

  }

  render() {
    const {company, loading, error, trades} = this.props;
    if (loading || !company) {
      return (
        <div className="blue-loading">
          <div>loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="blue-loading">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    const coverImage = {
      backgroundImage: `url(${company.cover_image})`
    };

    const profileImage = {
      backgroundImage: `url(${company.profile_image})`
    };

    return (
      <div className="detailed-content-wrapper company">
        <Sidebar>
          <div className="profile-info">
            <div className="profile-image-wrapper">
              <div className="background-image" style={profileImage}></div>
            </div>
            <img className="icon" src={companyIcon}/>
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
                                    <img src={`/img/product_icon/hs_${id}.png`}></img>
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
                                    <img src={`/img/product_icon/hs_${id}.png`}></img>
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
                                    <img src={`/img/flags/country_${continentId}.png`}></img>
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
                  <img className="button-icon" src={getInTouchIcon}/>
                  Get In Touch
                </button>
              </div>
            : null}
        </Sidebar>
        <div className="center-content">
          <div className="header-image-wrapper">
            <div className="background-image" style={coverImage}>
              <div className="image-overlay-wrapper">
                <div className="image-overlay"></div>
                <div className="text-wrapper">
                  <div className="section-wrapper">
                    <img src={addressIcon}/>
                    <p>{company.address}</p>
                  </div>
                  <div className="section-wrapper">
                    <img src={phoneIcon}/>
                    <p>{company.phone_number}</p>
                  </div>
                  <div className="section-wrapper">
                    <img src={worldIcon}/>
                    <a rel="external" href={`http://${company.website}`}>{company.website}</a>
                  </div>
                  <div className="section-wrapper">
                    <button><img className="button-icon" src={getInTouchIcon}/>Get in Touch</button>
                  </div>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchCompany: id => {
      dispatch(fetchCompany(id))
    },
    fetchTradesByCompany: id => {
      dispatch(fetchTradesByCompany(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    company: state.companyProfile.company,
    loading: state.companyProfile.loading,
    error: state.companyProfile.error || null,
    trades: state.trades.profileTrades,
    tradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
