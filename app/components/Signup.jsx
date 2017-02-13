import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';
import {signup} from '../actions/authenticationActions';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && ('null' != nextProps.user)) {
      browserHistory.push('/profile');
    }
  }

  handlePasswordChange = (event) => {
    //set error message for valid password here
    this.setState({password: event.target.value})
  }

  handleEmailChange = (event) => {
    //set error message for valid email here
    this.setState({email: event.target.value})
  }

  signup = (e) => {
    e.preventDefault();
    this.props.signup(this.state.email, this.state.password);

  }

  render() {
    return (
      <div>
        <form>
          <h2 class="form-signin-heading">Create an account</h2>
          <label>Email</label>
          <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} placeholder="Email"></input>
          <label>Password</label>
          <input onChange={this.handlePasswordChange} value={this.state.password} type="password" name="password" placeholder="Password"></input>
          <label>
            Repeat Password</label>
          <input type="password" name="password2" class="form-control" placeholder="Repeat Password"></input>
          <div>
            <button onClick={this.signup}>Sign Up</button>
          </div>
        </form>
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {user: state.authentication.user}
}
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password) => {
      dispatch(signup(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
