import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticate} from "../actions/authenticationActions";
import {uploadImage, deleteCompany} from "../actions/userActions";
import Sidebar from "./Sidebar.jsx";
import Form from "./Form.jsx";
import {authenticateAndFetchCompany} from "../actions/companyActions";

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.token) {
      this.props.authenticateAndFetchCompany(this.props.token);
    }
    if (!this.props.token) {
      browserHistory.push("/login");
    }

  }

  componentDidUpdate() {
    const {token, companySaved, companyLoading, deleted} = this.props;
    if (!token) {
      browserHistory.push("/login");
    }

    if (companySaved && !companyLoading) {
      browserHistory.push(`/company/${companySaved}`);
      this.props.dispatch({type: "SAVE_FULFILLED", data: null});
    }
    if (deleted) {
      browserHistory.push("/login");
      this.props.dispatch({type: "COMPANY_FULFILLED", data: null});
    }
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
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    // loading company if one exists
    if (user.company_id && !company) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (this.props.companyLoading) {
      return (
        <div className="detailed-content-wrapper">
          <div>Company being saved...</div>
        </div>
      );
    }

    return (
      <div className="settings">
        <Sidebar>
          {user.company_id
            ? <h2>Edit Company</h2>
            : <h2>Register</h2>}
          <p>Enter the data of your company or service and you will be able to access this network of exporters and importers of the world</p>
        </Sidebar>
        <div className="center-content">
          {user.company_id
            ? <div><div onClick={() => {
                this.props.deleteCompany(user.company_id);
              }}>
                Delete Company</div>
              <Form company={this.props.company} user={user} title="Company Data" saveCompany={this.props.saveCompany}/>
              </div>
            : <div><Form company={null} user={user} title="Company Data" saveCompany={this.props.saveCompany}/></div>}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveCompany: (company, imagesToUpload) => {
      dispatch(uploadImage(company, imagesToUpload));
    },
    authenticateAndFetchCompany: token => {
      dispatch(authenticateAndFetchCompany(token));
    },
    deleteCompany: id => {
      dispatch(deleteCompany(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    companyLoading: state.user.loading,
    companySaved: state.user.company,
    deleted: state.user.deleted,
    loading: state.authentication.loading || state.companyProfile.loading,
    error: state.authentication.error,
    token: state.authentication.token,
    company: state.companyProfile.company
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
