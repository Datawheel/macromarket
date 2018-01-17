import React, {Component} from "react";
import {connect} from "react-redux";
import {onboardingLogin as login} from "../actions/onboardingActions";
import {translate} from "react-i18next";
import {Intent, Toaster} from "@blueprintjs/core";

class OnboardingLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      submitted: false,
      toast: typeof window !== "undefined" ? Toaster.create() : null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const {redirect} = this.props;
    const {email, password} = this.state;
    this.props.login({email, password, redirect});
    this.setState({submitted: true});
  }

  componentDidUpdate() {

    const {auth, mailgun, t} = this.props;
    const {email, submitted, toast} = this.state;

    if (submitted && !auth.loading) {

      if (auth.error === "WRONG_PW") {
        toast.show({
          action: mailgun ? {
            onClick: () => {
              this.setState({submitted: true});
              // this.props.resetPassword(email);
            },
            text: t("Reset.button")
          } : null,
          iconName: "error",
          intent: Intent.DANGER,
          message: t("Login.error")
        });
        this.setState({submitted: false});
      }
      else if (auth.msg === "RESET_SEND_SUCCESS") {
        toast.show({iconName: "inbox", intent: Intent.SUCCESS, message: t("Reset.actions.RESET_SEND_SUCCESS", {email})});
        this.setState({submitted: false});
      }
      else if (auth.error === "RESET_SEND_FAILURE") {
        toast.show({iconName: "error", intent: Intent.DANGER, message: t("Reset.actions.RESET_SEND_FAILURE")});
        this.setState({submitted: false});
      }
      else if (!auth.error) {
        toast.show({iconName: "endorsed", intent: Intent.SUCCESS, message: t("Login.success")});
      }
    }

  }

  render() {

    const {t} = this.props;
    const {email, password} = this.state;

    return (
      <div>
        <form id="login" onSubmit={this.onSubmit.bind(this)} className="login-container">
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-envelope"></span>
            <input className="pt-input" placeholder={ t("Login.E-mail") } value={email} type="email" name="email" onChange={this.onChange} tabIndex="1" />
          </div>
          <div className="pt-input-group">
            <span className="pt-icon pt-icon-lock"></span>
            <input className="pt-input" placeholder={ t("Login.Password") } value={password} type="password" name="password" onFocus={this.onChange} onChange={this.onChange} autoComplete="Off" tabIndex="3" />
          </div>
          <button className="pt-button pt-fill" type="submit" tabIndex="5">{ t("Login.Login") }</button>
        </form>
      </div>
    );

  }
}

OnboardingLogin.defaultProps = {
  redirect: "/"
};

const mapStateToProps = state => ({
  auth: state.auth,
  mailgun: state.mailgun,
  social: state.social
});

const mapDispatchToProps = dispatch => ({
  login: userData => {
    dispatch(login(userData));
  }
});

OnboardingLogin = translate()(OnboardingLogin);
OnboardingLogin = connect(mapStateToProps, mapDispatchToProps)(OnboardingLogin);
export {OnboardingLogin};
