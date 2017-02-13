import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from 'react-router';
import {login} from '../actions/authenticationActions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
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

  logIn = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    const {user, loading, error} = this.props;

    if (error) {

      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Username password combo is incorrect.</p>
        </div>
      )
    }

    if (loading) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    return (
      <div>
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

const mapStateToProps = (state) => {
  return {user: state.authentication.user,
    loading: state.authentication.loading,
    error: state.authentication.error || null}
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
