import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {signup} from "../actions/authenticationActions";
import "../components/Settings.css";
import Sidebar from "components/Sidebar";
import "../components/Form.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordRepeat: ""
    };
  }

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.user) {
      browserHistory.push("/settings/user");
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signup = e => {
    e.preventDefault();
    const {email, password, passwordRepeat} = this.state;

    if (!email || !password || !passwordRepeat) {
      this.setState({error: "Missing Credentials"});
      return;
    }

    if (!this.validateEmail(email)) {
      this.setState({error: "Please enter a valid email address."});
      return;
    }
    if (password.length < 5) {
      this.setState({error: "Password must be at least 5 characters"});
      return;
    }
    if (password !== passwordRepeat) {
      this.setState({error: "Password fields don't match"});
      return;
    }

    this.props.signup(this.state.email, this.state.password);
  }

  render() {

    return (
      <div className="signup">
        <div className="inner-content-wrapper">
          <Sidebar></Sidebar>
          <div className="center-content form-wrapper">
            <div className="title-wrapper">Sign Up</div>
            <form className="form" onSubmit={this.signup}>
              <div className="content-wrapper">
                <div className="password error-wrapper">
                  {this.props.error
                    ? <p>{this.props.error}</p>
                    : this.state.error
                      ? <p>{this.state.error}</p>
                      : null}</div>
                <div className="input-wrapper">
                  <label>Email</label>
                  <input type="text" name="email" onChange={this.onChange} value={this.state.email}></input>
                </div>
                <div className="input-wrapper">
                  <label>Password</label>
                  <input onChange={this.onChange} value={this.state.password} type="password" name="password"></input>
                </div>
                <div className="input-wrapper">
                  <label>
                    Repeat Password</label>
                  <input onChange={this.onChange} value={this.state.passwordRepeat} type="password" name="passwordRepeat"></input>
                  <div></div>
                  <div className="signup-wrapper">
                    <button onClick={this.signup}>Register</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {user: state.authentication.user, error: state.authentication.error};
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (email, password) => {
      dispatch(signup(email, password));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
