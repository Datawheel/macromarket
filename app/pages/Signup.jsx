import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {signup} from "../actions/authenticationActions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordRepeat: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && nextProps.user) {
      browserHistory.push("/profile");
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
      this.setState({error: "Please set all fields."});
      return;
    }

    if (password !== passwordRepeat) {
      this.setState({error: "Password fields don't match."});
      return;
    }

    this.props.signup(this.state.email, this.state.password);

  }

  render() {

    return (
      <div>
        <form>
          <h2 className="form-signin-heading">Create an account</h2>
          {this.state.error
            ? <div className="error">{this.state.error}</div>
            : null}
          {this.props.error
            ? <div className="error">{this.props.error}</div>
            : null}
          <label>Email</label>
          <input type="text" name="email" onChange={this.onChange} value={this.state.email} placeholder="Email"></input>
          <label>Password</label>
          <input onChange={this.onChange} value={this.state.password} type="password" name="password" placeholder="Password"></input>
          <label>
            Repeat Password</label>
          <input onChange={this.onChange} value={this.state.passwordRepeat} type="password" name="passwordRepeat" placeholder="Repeat Password"></input>
          <div>
            <button onClick={this.signup}>Sign Up</button>
          </div>
        </form>
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
