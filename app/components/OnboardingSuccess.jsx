import React from "react";
import {connect} from "react-redux";
import {isAuthenticated} from "@datawheel/canon-core";
import {toggleOverlay, sendActivation} from "actions/onboardingActions";
import {Intent} from "@blueprintjs/core";
import PropTypes from "prop-types";

class OnboardingSuccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }

  componentDidMount() {
    this.props.isAuthenticated();
  }

  navigateToSettings = () => {
    const {router} = this.context;
    this.props.toggleOverlay();
    router.push("/settings/");
  }

  sendActivation(e) {
    e.preventDefault();
    console.log("here");
    const {email} = this.props.auth.user;
    this.props.sendActivation(email);
    this.setState({submitted: true});
  }

  componentDidUpdate() {
    const {auth} = this.props;
    const {submitted} = this.state;
    const {toast} = this.context;
    if (submitted && !auth.loading && (auth.msg || auth.error)) {
      if (auth.msg === "ACTIVATE_SEND_SUCCESS") {
        toast.show({iconName: "inbox", intent: Intent.SUCCESS, message: `An email has been sent to ${auth.user.email}.`});
        this.setState({submitted: false});
      }
      else if (auth.error === "ACTIVATE_SEND_FAILURE") {
        toast.show({iconName: "error", intent: Intent.DANGER, message: "There was an error sending an acitivation email."});
        this.setState({submitted: false});
      }
    }
  }
  render() {
    const user = this.props.auth ? this.props.auth.user : null;
    return (
      <div className="slide-inner">
        <div className="slide-content">
          <h2>Congratulations your company has been saved!</h2>
          {user && !user.activated
            ? <div>
              <p className="description-text">
                Before your company can be publically listed, you must verify your email address.
              </p>
              <div className="bp3-callout bp3-intent-danger">
                <h5>E-mail: Not Verified</h5>
                <button className="bp3-button bp3-fill bp3-intent-danger" onClick={this.sendActivation.bind(this)}>{ "Resend Activation Email" }</button>
              </div>
              <div className="buttons-wrapper">
                <button onClick={this.navigateToSettings} className="onboarding-button">Continue Browsing</button>
                <button onClick={this.navigateToSettings} className="onboarding-button">Settings</button>
              </div>
            </div>
            : <div><div className="text-wrapper">
              {this.props.product ? <p className="description-text">You company has been listed under <span>{this.props.product.name}</span>
                . Make your company stand out by visiting your settings to add more information to your company!</p>
                : <p className="description-text">Make your company stand out by visiting your settings to add more information to your company!</p>}
            </div>
            <div className="buttons-wrapper">
              <button onClick={this.props.toggleOverlay} className="onboarding-button">Continue Browsing</button>
              <button onClick={this.navigateToSettings} className="onboarding-button">Settings</button>
            </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

OnboardingSuccess.contextTypes = {
  router: PropTypes.object,
  toast: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  },
  sendActivation: email => {
    dispatch(sendActivation(email));
  },
  toggleOverlay: () => {
    dispatch(toggleOverlay());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSuccess);
