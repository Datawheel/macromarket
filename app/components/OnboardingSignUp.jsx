import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {onboardingSignup as signup} from "actions/onboardingActions";
import {translate} from "react-i18next";
import {Intent} from "@blueprintjs/core";

class OnboardingSignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      agreedToTerms: false,
      error: null,
      password: "",
      passwordAgain: "",
      email: null,
      labelUp: [],
      submitted: false,
      username: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const val = e.target.name === "agreedToTerms" ? e.target.checked : e.target.value;
    this.setState({
      [e.target.name]: val,
      labelUp: this.state.labelUp.concat([e.target.name])
    });
  }
  onBlur(e) {
    if (e.target.value === "") {
      const index = this.state.labelUp.indexOf(e.target.name);
      this.setState({labelUp: this.state.labelUp.filter((_, i) => i !== index)});
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const {legal, t} = this.props;
    const {agreedToTerms, email, password, passwordAgain, username} = this.state;

    if (password !== passwordAgain) {
      this.setState({error: {iconName: "lock", message: t("SignUp.error.PasswordMatch")}});
    }
    else if (!username || !email || !password) {
      this.setState({error: {iconName: "id-number", message: t("SignUp.error.IncompleteFields")}});
    }
    else if ((legal.privacy || legal.terms) && !agreedToTerms) {
      this.setState({error: {iconName: "saved", message: t("SignUp.error.TermsAgree")}});
    }
    else {
      this.props.signup({username, email, password});
      this.setState({submitted: true});
    }

  }

  componentDidUpdate() {
    const {error} = this.state;

    if (error) {
      this.showToast(error.message, error.iconName, error.intent);
      this.setState({error: false});
    }

  }

  componentWillReceiveProps(nextProps) {
    const {auth, t} = nextProps;
    const {submitted} = this.state;

    if (submitted && !auth.loading) {
      if (auth.msg === "SIGNUP_SUCCESS") {
        this.showToast(t("SignUp.success"), "endorsed", Intent.SUCCESS);
      }
      else if (auth.error === "SIGNUP_EXISTS") {
        console.log("signup exists");
        this.showToast(t("SignUp.error.Exists"), "blocked-person", Intent.WARNING);
        this.setState({submitted: false});
      }
    }
  }


  showToast(message, iconName = "lock", intent = Intent.DANGER) {
    const toast = this.context.toast.current;
    toast.show({iconName, intent, message});
  }

  render() {
    const {auth, legal, t} = this.props;
    const {agreedToTerms} = this.state;
    const email = this.state.email === null ? auth.error && auth.error.email ? auth.error.email : "" : this.state.email;
    return (
      <div>
        <form id="signup" onSubmit={this.onSubmit.bind(this)} className="login-container">
          <div className={this.state.labelUp.includes("email") ? "input-wrapper labelUp" : "input-wrapper" }>
            <label>Email</label>
            <input value={email} type="email" name="email" onFocus={this.onChange} onBlur={this.onBlur.bind(this)} onChange={this.onChange} tabIndex="1" />
          </div>
          <div className={this.state.labelUp.includes("username") ? "input-wrapper labelUp" : "input-wrapper" }>
            <label>Username</label>
            <input value={this.state.username} type="text" name="username" onFocus={this.onChange} onBlur={this.onBlur.bind(this)} onChange={this.onChange} tabIndex="2" />
          </div>
          <div className={this.state.labelUp.includes("password") ? "input-wrapper labelUp" : "input-wrapper" }>
            <label>Password</label>
            <input value={this.state.password} type="password" name="password" onFocus={this.onChange} onBlur={this.onBlur.bind(this)} onChange={this.onChange} autoComplete="Off" tabIndex="3" />
          </div>
          <div className={this.state.labelUp.includes("passwordAgain") ? "input-wrapper labelUp" : "input-wrapper" }>
            <label>Confirm Password</label>
            <input value={this.state.passwordAgain} type="password" name="passwordAgain" onBlur={this.onBlur.bind(this)} onFocus={this.onChange} onChange={this.onChange} autoComplete="Off" tabIndex="4" />
          </div>
          { legal.privacy || legal.terms
            ? <label className=" legal-terms bp3-control bp3-checkbox" htmlFor="ppcbox">
              <input type="checkbox" id="ppcbox" name="agreedToTerms" checked={agreedToTerms} onChange={this.onChange} />
              <span className="bp3-control-indicator"></span>
              <span dangerouslySetInnerHTML={{__html: legal.privacy && legal.terms ? t("SignUp.PrivacyTermsText") : legal.privacy ? t("SignUp.PrivacyText") : t("SignUp.TermsText"), legal}}></span>
            </label>
            : null }
          <button className="onboarding-button" type="submit" tabIndex="5">{ t("SignUp.Sign Up") }</button>
        </form>
      </div>
    );

  }
}

OnboardingSignUp.contextTypes = {
  toast: PropTypes.object
};

OnboardingSignUp.defaultProps = {
  redirect: "/"
};

const mapStateToProps = state => ({
  auth: state.auth,
  legal: state.legal,
  social: state.social
});

const mapDispatchToProps = dispatch => ({
  signup: userData => {
    dispatch(signup(userData));
  }
});

OnboardingSignUp = connect(mapStateToProps, mapDispatchToProps)(OnboardingSignUp);
OnboardingSignUp = translate()(OnboardingSignUp);
export {OnboardingSignUp};
