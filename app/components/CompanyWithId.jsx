import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from "../actions/companyActions";
import {fetchProductsByCompany} from "../actions/productsActions";
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
                      ? <div>{trades.imports.map((trade, index) => {
                            return (
                              <Link to={`/product/${trade.product_id}`}>
                                <div className="product-wrapper" key={index}>
                                  <p>{trade.Product.name}</p>
                                </div>
                              </Link>
                            );
                          })}</div>
                      : null}
                  </div>
                </div>
                <div className="exports">
                  <div className="section-wrapper">
                    <h5>Products | Exports</h5>
                    <div className="yellow-line"></div>
                    {trades.exports
                      ? <div>{trades.exports.map((trade, index) => {
                            return (
                              <Link to={`/product/${trade.product_id}`}>
                                <div className="product-wrapper" key={index}>
                                  <p>{trade.Product.name}</p>
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
                          {trades.countries.map((country, index) => {
                            return (
                              <div className="product-wrapper" key={index}>
                                <p>{country}</p>
                              </div>
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
                    <p>{company.website}</p>
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
    trades: state.products.products,
    tradesLoading: state.products.loading,
    tradesError: state.products.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
