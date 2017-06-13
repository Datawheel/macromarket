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
      error: ""
    }
  }

  // componentDidMount() {
  //   // this.props.isAuthenticated();
  // }
  //
  // componentDidUpdate() {
  //   if (!this.props.user && !this.props.loading) {
  //     browserHistory.push("/login");
  //   }
  //   if (this.props.deleted) {
  //     browserHistory.push("/login");
  //   }
  // }

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
    else if (this.state.password1 !== this.state.password2) {
      this.setState({error: "Passwords must match"});
    } else {
      this.props.updateUser(this.props.user.id, this.props.user.email, this.state.password1);
    }
  }

  deleteCompany = () => {
    console.log(this.props.user.company_id, "DELTET COMPANY ID")
    this.props.deleteCompany(this.props.user.company_id);
  }

  render() {
    const {updatedUser, user, loading, error} = this.props;

    if (!user || error) {
      return (
        <div className="settings">
          <div className="inner-content">
            <h2>Error</h2>
            <p>Please refresh the page.</p>
          </div>
        </div>
      );
    }


    return (
      <div>
        <div className="input-wrapper">
          <label>New Password</label>
          <input type="password" onChange={this.handleChange} name="password1"/>
        </div>
        <div className="input-wrapper">
          <label>Comfirm Password</label>
          <input type="password" onChange={this.handleChange} name="password2"/>
        </div>
        <div className="password error-wrapper">
          <p>{this.state.error}</p>
          {updatedUser
            ? <p>New password Saved!</p>
            : null}
        </div>
        <div className="button-wrapper">
          <button className="button-back" onClick={this.save}>Save</button>
        </div>
        <div className="button-wrapper">
          <button className="button-back" onClick={this.deleteCompany}>Delete Company</button>
        </div>
        <div className="button-wrapper">
          <button className="button-back" onClick={this.props.logout}>Log Out</button>
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
    updateUser: (id, email, password) => {
      dispatch(updateUser(id, email, password));
    },
    isAuthenticated: () => {
      dispatch(isAuthenticated());
    }
  };
}

const mapStateToProps = state => {
  return {updatedUser: state.authentication.updatedUser, user: state.authentication.user, loading: state.authentication.loading, error: state.authentication.error}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserData);
