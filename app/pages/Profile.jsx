import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {isAuthenticated, logout, updateUser} from "../actions/authenticationActions";
import "./Profile.css";
import "../components/Form.css";

class userWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password1: "",
      password2: "",
      error: ""
    }
  }

  componentDidMount() {
    // this.props.isAuthenticated();
  }

  componentDidUpdate() {
    if (!this.props.user && !this.props.loading) {
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
    }
    else {
      this.props.updateUser(this.props.user.id, this.props.user.email, this.state.password1);
    }
  }

  render() {
    const {updatedUser, user, loading, error} = this.props;
        console.log(user, "ADFDFD");
    if (!user || error) {
      return (
        <div className="profile">
          <div className="inner-content">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      </div>
      );
    }

    return (
      <div className="profile">
        <div className="inner-content">
          <h3>{user ? user.email : null}</h3>
          <ul>
            <Link to="/inbox">
              <li>Inbox</li>
            </Link>
            <Link to="/settings">
              {user.company_id
                ? <li>Settings</li>
                : <li>Register a Company</li>}
            </Link>
          </ul>
          <div className="form-wrapper">
            <div className="form">

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
                <button className="button-back" onClick={this.props.logout}>Log Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: () => {
      dispatch(isAuthenticated());
    },
    logout: () => {
      dispatch(logout())
    },
    updateUser: (id, email, password) => {
      dispatch(updateUser(id, email, password));
    }
  };
};

const mapStateToProps = state => {
  return {updatedUser: state.authentication.updatedUser, user: state.authentication.user, loading: state.authentication.loading, error: state.authentication.error, token: state.authentication.token};
};

export default connect(mapStateToProps, mapDispatchToProps)(userWithId);
