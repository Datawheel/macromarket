import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import { browserHistory } from 'react-router'
import {login} from '../actions/authenticationActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    componentWillUpdate() {
        console.log(this.props.user);
    }


    handleEmailChange = (event) => {
      //set error message for valid email here
        this.setState({email: event.target.value})
    }
    handlePasswordChange = (event) => {
      //set error message for valid password here
        this.setState({password: event.target.value})
    }

    login = (e) => {
      	e.preventDefault();
        console.log(this.props);
        this.props.login(this.state.email, this.state.password);
        //browserHistory.push('/profile')
    }

    render() {

      // <form>
      //     <div>
      //         <label>Email:</label>
      //         <input onChange={this.handleEmailChange} value={this.state.email} type="text" name="email"/>
      //     </div>
      //     <div>
      //         <label>Password:</label>
      //         <input onChange={this.handlePasswordChange} value={this.state.password} type="password" name="password"/>
      //     </div>
      //     <div>
      //         <button onClick={this.login}>Login</button>
      //     </div>
      // </form>

        return (
            <div>
                <h2>LOGIN</h2>
                <div className="login-form-wrapper">
                  <form action="/api/login" method="post">
                      <div>
                          <label>Email:</label>
                          <input type="text" name="email"/>
                      </div>
                      <div>
                          <label>Password:</label>
                          <input type="password" name="password"/>
                      </div>
                      <div>
                          <input type="submit" value="Log In"/>
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
  return {
    user: state.authentication.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
