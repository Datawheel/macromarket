import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCompany} from '../actions/companyActions';
import companyIcon from "../img/icons/icon-company-white.svg";

class CompanyWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.params.companyWithId;
    this.props.fetchCompany(id);
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
              Imports
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
              Exports
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
          </div>
        </Sidebar>
        <div className="center-content">
          <div className="header-image-wrapper">
            <div className="background-image" style={coverImage}>
              <div className="company-overlay-wrapper">
                <div className="company-overlay">
                </div>
                <div className="text-wrapper">
                  <p>{company.address}</p>
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
    }
  };
};

const mapStateToProps = state => {
  return {
    company: state.companyProfile.company,
    loading: state.companyProfile.loading,
    error: state.companyProfile.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyWithId);
