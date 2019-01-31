import React from "react";
import {Reset as CanonReset} from "@datawheel/canon-core";
import PropTypes from "prop-types";
import "./Admin.css";
import "./Settings.css";

class Reset extends React.Component {
  constructor() {
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
    const {router} = this.context;
    if (!nextProps.loading && nextProps.resetPw) {
      router.push("/login");
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
    return (
      <div className="login">
        <div className="inner-content-wrapper">
          <div className="center-content form-wrapper">
            <CanonReset location={ this.props.location } />
          </div>
        </div>
      </div>
    );
  }
}

Reset.contextTypes = {
  router: PropTypes.object
};

export default Reset;
