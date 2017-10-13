import React from "react";
import {browserHistory} from "react-router";
import {Reset as CanonReset} from "datawheel-canon";
import Sidebar from "components/Sidebar";
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
          <div className="center-content form-wrapper">
            <CanonReset location={ this.props.location } />
          </div>
        </div>
      </div>
    );
  }
}

export default Reset;
