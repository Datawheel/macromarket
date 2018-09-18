import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {signup} from "../../actions/authenticationActions";
import {SignUp} from "@datawheel/canon-core";
import "./Settings.css";
import Sidebar from "components/Sidebar";
import "./Admin.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordRepeat: ""
    };
  }

  validateEmail = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
          <div className="center-content form-wrapper">
            <SignUp redirect="/settings" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({user: state.authentication.user, error: state.authentication.error});

const mapDispatchToProps = dispatch => ({
    signup: (email, password) => {
      dispatch(signup(email, password));
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
