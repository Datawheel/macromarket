import api from "../api.js";
import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticate, login} from "../actions/authenticationActions";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
  // this.props.isAuthenticated();
  }


  componentDidUpdate() {
    // const {token, user} = this.props;
    // if (user) {
    //   browserHistory.push("/profile");
    // }
    // if (token) {
    //   this.props.authenticate(this.props.token);
    // }
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

    if (loading) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (user) {
      return (
        <div>
          <h2>login</h2>
          <div className="login-form-wrapper">
            <h3>Already logged in.</h3>
            <p>Go to your <a href="/profile">profile</a>.</p>
          </div>
        </div>
      );
    }

    return (
      <div>
        {error
          ? <div className="err">error</div>
          : null}
        <h2>login</h2>
        <div className="login-form-wrapper">
          <form>
            <div>
              <label>Email:</label>
              <input onChange={this.handleEmailChange} value={this.state.email} type="text" name="email"/>
            </div>
            <div>
              <label>Password:</label>
              <input onChange={this.handlePasswordChange} value={this.state.password} type="password" name="password"/>
            </div>
            <div>
              <button onClick={this.logIn}>Login</button>
            </div>
          </form>

          <p>Don't have an account?
            <Link to="/signup">Sign up</Link>
          </p>
          <p>Forgot Password?</p>
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
