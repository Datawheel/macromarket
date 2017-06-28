import api from "../api.js";
import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticate, login} from "../actions/authenticationActions";
import Sidebar from "components/Sidebar";
import "../components/Form.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    const {user} = this.props;

    if (user) {
      browserHistory.push("/settings/user");
    }
  }

  componentDidUpdate() {
    const {user} = this.props;
    if (user) {
      browserHistory.push("/settings/user");
    }
  }

  handlePasswordChange = event => {
    this.setState({password: event.target.value});
  }

  handleEmailChange = event => {
    this.setState({email: event.target.value});
  }

  logIn = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);

  }

  render() {
    const {loading, error, user} = this.props;

    return (
      <div className="login">
        <div className="inner-content-wrapper">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="title-wrapper">Login</div>
            <div className="form">
              <div className="content-wrapper">
                <div className="password error-wrapper">
                  {error
                    ? <p>{error}</p>
                    : null}</div>
              </div>
              <div className="input-wrapper">
                <label>Email</label>
                <input onChange={this.handleEmailChange} value={this.state.email} type="text" name="email"/>
              </div>
              <div className="input-wrapper">
                <label>Password</label>
                <input onChange={this.handlePasswordChange} value={this.state.password} type="password" name="password"/>
              </div>
              <div className="login-wrapper">
                <button onClick={this.logIn}>Login</button>
              </div>
            </div>
            <div className="text-wrapper">
              <p>Don't have an account?
                <Link to="/signup">
                  {` Sign up`}</Link>
              </p>
              <p>Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.authentication.user,
    error: state.authentication.error || null,
    loading: state.authentication.loading,
    token: state.authentication.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isAuthenticated: () => {
      dispatch(isAuthenticated());
    },
    login: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
