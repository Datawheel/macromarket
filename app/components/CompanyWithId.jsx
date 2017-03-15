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
    const {company, loading, error} = this.props;
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
    console.log(this.props.trades);
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
          <div className="products">
            <div className="imports">
              <div className="section-wrapper">
                <h5>Products | Imports</h5>
                <div className="yellow-line"></div>
              </div>
              <ul>
                <li>
                  <Link to="/product/111">
                    Grapes</Link>
                </li>
                <li>
                  <Link to="/product/222">
                    Dirt</Link>
                </li>
                <li>
                  <Link to="/product/444">
                    Salt</Link>
                </li>
              </ul>
            </div>
            <div className="exports">
              <div className="section-wrapper">
                <h5>Products | Exports</h5>
                <div className="yellow-line"></div>
              </div>
              <ul>
                <li>
                  <Link to="/product/444">
                    Steel</Link>
                </li>
                <li>
                  <Link to="/product/555">
                    Wine</Link>
                </li>
                <li>
                  <Link to="/product/666">
                    Wood</Link>
                </li>
              </ul>

            </div>
            <button>
              <img className="button-icon" src={getInTouchIcon}/>
              Get In Touch
            </button>
          </div>
        </Sidebar>
        <div className="center-content">
          <div className="header-image-wrapper">
            <div className="background-image" style={coverImage}>
              <div className="company-overlay-wrapper">
                <div className="company-overlay"></div>
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
    tradesError: state.products.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
