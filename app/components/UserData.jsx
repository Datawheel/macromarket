import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {deleteCompany} from "../actions/userActions";
import {isAuthenticated, logout, updateUser} from "../actions/authenticationActions";
import Sidebar from "../components/Sidebar";
import "../components/Form.css";

class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      error: "",
      oldPassword: "",
      deleteVisible:false
    }
  }

  componentWillMount() {
    this.props.clearUser();
  }

  handleChange = e => {
    e.target.value
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  save = () => {
    if (this.state.password1.length < 5 || this.state.password2.length < 5) {
      this.setState({error: "Password must be longer than 5 characters."});
    } else if (this.state.password1 !== this.state.password2) {
      this.setState({error: "Passwords must match."});
    } else {
      this.setState({error: null});
      this.props.updateUser(this.props.user.id, this.props.user.email, this.state.oldPassword, this.state.password1);
    }
  }

  deleteCompany = () => {
    this.setState({deleteVisible: true});
    // this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {updatedUser, user, loading, error} = this.props;

    return (
      <div className={this.state.deleteVisible ? "user-data-opacity" : "user-data-wrapper"}>
      <div className="delete-popup">
        Are you sure you want to delte
      </div>
      <div className="user-data">
        {this.props.company
          ? <div className="section-wrapper no-border listing">
              <b>Your Listing: {this.props.company.name}</b>
              <div className="input-wrapper company-wrapper">
                <Link to={`/company/${this.props.company.id}`}>
                <div className="view-listing">
                  <p>View Company</p><span className="chevron right"></span>
                </div></Link>
              <div className="delete-company" onClick={this.deleteCompany}>
                  <p>Delete Company</p>
                  <span className="delete"></span>
                </div>
              </div>
            </div>
          : <div className="section-wrapper listing">
            <b>Your Listing</b>
          <div className="register-company">
            <p>You do not have a company registered.</p>
            <Link to="/settings/company">
              <button className=" button button-next">Register a Company</button>
            </Link>
          </div>
          </div>}
        <div>
          <b>Update Your Password</b>
          <div className="input-wrapper">
            <label>Old Password</label>
            <input type="password" value={this.state.oldPassword} onChange={this.handleChange} name="oldPassword"/>
          </div>
          <div className="input-wrapper">
            <label>New Password</label>
            <input type="password" value={this.state.password1} onChange={this.handleChange} name="password1"/>
          </div>
          <div className="input-wrapper">
            <label>Comfirm Password</label>
            <input type="password" value={this.state.password2} onChange={this.handleChange} name="password2"/>
          </div>
          <div className="password error-wrapper">
            {updatedUser
              ? <p>New password saved!</p>
              : <p>{this.props.error
                  ? this.props.error
                  : this.state.error}</p>}
          </div>
          <div className="button-wrapper">
            <button className="button button-next" onClick={this.save}>Save</button>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCompany: id => {
      dispatch(deleteCompany(id));
    },
    updateUser: (id, email, oldPassword, password) => {
      dispatch(updateUser(id, email, oldPassword, password));
    },
    clearUser: () => {
      dispatch({type: "SAVE_USER_FULFILLED", date: null})
    },
    isAuthenticated: () => {
      dispatch(isAuthenticated());
    }
  };
}

const mapStateToProps = state => {
  return {updatedUser: state.authentication.updatedUser, company: state.companyProfile.authCompany, user: state.authentication.user, loading: state.authentication.loading, error: state.authentication.error}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserData);
