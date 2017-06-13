import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {uploadImage, deleteCompany} from "../actions/userActions";
import {authenticateAndFetchCompany} from "../actions/companyActions";
import Sidebar from "components/Sidebar";
import "../components/Form.css";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    }
  }

  componentDidMount() {
    this.props.authenticateAndFetchCompany();
  }

  componentDidUpdate() {
    if (!this.props.user && !this.props.loading) {
      browserHistory.push("/login");
    }
    if (this.props.deleted) {
      browserHistory.push("/login");
      this.setState({trade: []});
    }
  }

  nextSlide = () => {
    this.setState({
      slide: this.state.slide + 1
    });
  }

  previousSlide = () => {
    this.setState({
      slide: this.state.slide - 1
    });
  }

  deleteCompany = () => {
    this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {user, loading, error, company} = this.props;

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    //  loading user
    if (loading || !user) {
      return (
        <div className="settings">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div>loading...</div>
          </div>
        </div>
      );
    }

    // loading company if one exists
    if (user.company_id && !company) {
      return (
        <div className="settings">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div>loading...</div>
          </div>
        </div>
      );
    }

    if (this.props.companyLoading) {
      return (
        <div className="settings">
          <div>Company being saved...</div>
        </div>
      );
    }
    if(!this.props.company) {
      return <div>empy</div>
    }
    console.log(company, "HERERER");
    return (
      <div className="settings">
        <Sidebar>
          {user.company_id
            ? <div>
                <h2>Edit Company</h2>
                <div onClick={() => {
                  this.deleteCompany();
                }}>
                  Delete Company</div>
              </div>
            : <h2>Register</h2>}
          <p>Enter the data of your company or service and you will be able to access this network of exporters and importers of the world</p>
        </Sidebar>
        <div className="center-content form-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    authenticateAndFetchCompany: () => {
      dispatch(authenticateAndFetchCompany());
    },
    deleteCompany: id => {
      dispatch(deleteCompany(id));
    }
  };
}

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    companyLoading: state.user.loading,
    companySaved: state.user.company,
    deleted: state.companyProfile.deleted,
    loading: state.authentication.loading || state.companyProfile.loading,
    error: state.authentication.error,
    company: state.companyProfile.authCompany
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
