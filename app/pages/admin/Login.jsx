import api from "../../api.js";
import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {authenticate, login} from "../../actions/authenticationActions";
import {Login as CanonLogin} from "datawheel-canon";
import Sidebar from "components/Sidebar";
import "./Admin.css";
import "./Settings.css";

class Login extends React.Component {
  constructor () {
    super();
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
            <CanonLogin />
            <div className="text-wrapper">
              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
              <p><Link to="/reset">Forgot Password?</Link></p>
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
