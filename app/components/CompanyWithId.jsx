import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from "../actions/companyActions";
import {fetchProductsByCompany} from "../actions/tradesActions";
import companyIcon from "../img/icons/icon-company-white.svg";
import addressIcon from "../img/icons/icon-country-yellow.svg";
import phoneIcon from "../img/icons/icon-telephone-yellow.svg";
import worldIcon from "../img/icons/icon-world-yellow.svg";
import getInTouchIcon from "../img/icons/icon-mail.svg";

class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.params.companyWithId;
    this.props.fetchCompany(id);
    this.props.fetchProductsByCompany(id);
  }

  render() {
    const {company, loading, error, trades} = this.props;
    if (loading || !company) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
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
                            return (
                              <Link key={index} to={`/product/${trade}`}>
                                <div className="product-wrapper">
                                  <p>{trades.imports[trade].name}</p>
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
                            return (
                              <Link key={index} to={`/product/${trade}`}>
                                <div className="product-wrapper">
                                  <p>{trades.exports[trade].name}</p>
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
                            return (
                              <Link key={index} to={`/country/${country}`}>
                                <div className="product-wrapper">
                                  <p>{trades.countries[country].name}</p>
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
    fetchProductsByCompany: id => {
      dispatch(fetchProductsByCompany(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    company: state.companyProfile.company,
    loading: state.companyProfile.loading,
    error: state.companyProfile.error || null,
    trades: state.trades.trades,
    tradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
