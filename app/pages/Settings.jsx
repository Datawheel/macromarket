import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {deleteCompany} from "../actions/userActions";
import {logout, updateUser} from "../actions/authenticationActions";
import Sidebar from "../components/Sidebar";
import "../components/Form.css";
import "../components/Settings.css";
import {authenticateAndFetchCompany} from "../actions/companyActions";
import UserData from "./admin/UserData";
import CompanyData from "../components/CompanyData";
// import ProductSelection from "../components/ProductSelection";
import CountrySelection from "../components/CountrySelection";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      error: ""
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
    }
  }

  handleChange = e => {
    e.target.value
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  save = () => {
    if (this.state.password1.length < 5 || this.state.password2.length < 5) {
      this.setState({error: "Password must be longer than 5 characters"});
    }
    if (this.state.password1 !== this.state.password2) {
      this.setState({error: "Passwords must match"});
    } else {
      this.props.updateUser(this.props.user.id, this.props.user.email, this.state.password1);
    }
  }

  deleteCompany = () => {
    this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {updatedUser, user, loading, error} = this.props;

    if (loading || !user) {
      return (
        <div className="settings">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="form"></div>
          </div>
        </div>
      );
    }

    const path = this.props.location.pathname;
    return (
      <div className="settings">
        <Sidebar>

          <h2>Settings</h2>
          <p className="user-email">{`Email: ${user.email}`}</p>

        </Sidebar>
        <div className="center-content form-wrapper">
          <div className="form">
            <UserData />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCompany: id => {
    dispatch(deleteCompany(id));
  },
  authenticateAndFetchCompany: () => {
    dispatch(authenticateAndFetchCompany());
  }
});

const mapStateToProps = state => ({
  updatedUser: state.authentication.updatedUser,
  user: state.authentication.user,
  loading: state.authentication.loading,
  error: state.authentication.error
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
