import api from "../api.js";
import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {checkResetToken, changePw, sendResetEmail} from "../actions/authenticationActions";
import Sidebar from "components/Sidebar";
import "../components/Form.css";
import "../components/Settings.css";

class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      email: "",
      password: "",
      passwordAgain: ""
    };
  }

  componentDidMount() {
    const {token} = this.props.location.query;
    if (token) {
      this.props.checkResetToken(token);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.resetPw) {
      browserHistory.push("/login");
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  changePw = e => {
    e.preventDefault();
    const {password, passwordAgain} = this.state;
    const {token} = this.props.location.query;
    if (password.length < 5) {
      this.setState({error: "Password must be at least 5 characters"});
      return;
    }
    if (password !== passwordAgain) {
      this.setState({error: "Password fields don't match"});
      return;
    }
    this.props.changePw(token, password);
  }

  sendResetEmail = e => {
    e.preventDefault();
    const {email} = this.state;
    this.props.sendResetEmail(email);
  }

  render() {
    const {token} = this.props.location.query;
    const {loading, msg, error, user} = this.props;
    const {error: localError} = this.state;
    const changePw = this.changePw.bind(this);
    const sendResetEmail = this.sendResetEmail.bind(this);

    return (
      <div className="login">
        <div className="inner-content-wrapper">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="title-wrapper">Reset Password</div>
            { token
              ? <form className="form" onSubmit={changePw}>
                <div className="content-wrapper">
                  <div className="password error-wrapper">
                  {error
                    ? <p>{error}</p>
                    : localError
                      ? <p>{localError}</p>
                      : null}
                  </div>
                </div>
                {!error
                  ? <div className="content-wrapper">
                  <div className="input-wrapper">
                    <label>Password</label>
                    <input onChange={this.handleChange} value={this.state.password} type="password" name="password"/>
                  </div>
                  <div className="input-wrapper">
                    <label>Repeat Password</label>
                    <input onChange={this.handleChange} value={this.state.passwordAgain} type="password" name="passwordAgain"/>
                  </div>
                  <div className="login-wrapper">
                    <button type="submit" onClick={changePw}>Reset</button>
                  </div>
                </div> : null }
              </form>
              : <form className="form" onSubmit={sendResetEmail}>
                <div className="content-wrapper">
                  {msg
                    ? <div className="alert alert-warning">
                    <p>{msg}</p>
                    </div> : null}
                </div>
                  <div className="content-wrapper">
                    <div className="input-wrapper">
                      <label>Email</label>
                      <input onChange={this.handleChange} value={this.state.email} type="email" name="email"/>
                    </div>
                    <div className="login-wrapper">
                      <button type="submit" onClick={sendResetEmail}>Send Reset Link</button>
                    </div>
                  </div>
              </form>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    resetPw: state.authentication.resetPw,
    error: state.authentication.error || null,
    loading: state.authentication.loading,
    msg: state.authentication.msg
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkResetToken: (token) => {
      dispatch(checkResetToken(token));
    },
    changePw: (token, password) => {
      dispatch(changePw(token, password));
    },
    sendResetEmail: (email) => {
      dispatch(sendResetEmail(email));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
