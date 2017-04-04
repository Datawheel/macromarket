import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {uploadImage, deleteCompany} from "../actions/userActions";
import Sidebar from "./Sidebar.jsx";
import CompanyDataForm from "./CompanyDataForm.jsx";
import TradesSelection from "./TradesSelection.jsx";
import {authenticateAndFetchCompany} from "../actions/companyActions";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: 0
    }
  }

  componentWillMount() {

    if (this.props.token) {
      this.props.authenticateAndFetchCompany(this.props.token);
    }
    if (!this.props.token) {
      browserHistory.push("/login");
    }
  }

  componentDidUpdate = () => {
    const {token, deleted} = this.props;
    if (!token) {
      browserHistory.push("/login");
    }

    if (deleted) {
      browserHistory.push("/login");
      this.setState({trade: []});
    }

  }

  nextSlide = () => {
    window.scrollTo(0,0);
    this.setState({
      slide: this.state.slide + 1
    });
  }

  previousSlide = () => {
    window.scrollTo(0,0);
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
            ? <div>
              <h2>Edit Company</h2>
                <div onClick={() => {
                  this.deleteCompany();
                }}>Delete Company</div>
              </div>
            : <h2>Register</h2>}
          <p>Enter the data of your company or service and you will be able to access this network of exporters and importers of the world</p>
          <div className="back-line"></div>

      </Sidebar>
        <div className="center-content form-wrapper">
          {this.state.slide === 0
            ? <div>
                {user.company_id
                  ? <div>
                      <CompanyDataForm nextSlide={this.nextSlide} company={this.props.company} user={user} title="Company Data" saveCompany={this.props.saveCompany}/>
                    </div>
                  : <div><CompanyDataForm nextSlide={this.nextSlide} company={null} user={user} title="Company Data" saveCompany={this.props.saveCompany}/></div>}</div>
            : null}
          {this.state.slide !== 0
            ? <div>
                <TradesSelection previousSlide={this.previousSlide} slide={this.state.slide} nextSlide={this.nextSlide} companyId={this.props.companySaved}/>
              </div>
            : null}
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
}

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    companyLoading: state.user.loading,
    companySaved: state.user.company,
    deleted: state.companyProfile.deleted,
    loading: state.authentication.loading || state.companyProfile.loading,
    error: state.authentication.error,
    token: state.authentication.token,
    company: state.companyProfile.authCompany
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);
