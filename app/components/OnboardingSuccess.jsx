import React from "react";
import {connect} from "react-redux";
import {Activate as CanonActivate} from "datawheel-canon";
import {NonIdealState} from "@blueprintjs/core";
import {isAuthenticated} from "datawheel-canon";
import {Link, browserHistory} from "react-router";
import {toggleOverlay} from "../actions/onboardingActions";
class OnboardingSuccess extends React.Component {
  componentDidMount() {
    this.props.isAuthenticated();
  }
  navigateToSettings = () => {
    this.props.toggleOverlay();
    browserHistory.push("/settings/");
  }
  
  render() {
    const user = this.props.auth ? this.props.auth.user : null;
    console.log(this.props.product);

    return (
      <div className="slide-inner">
        <div className="slide-content">
          <h2>Congratulations your company has been listed!</h2>
          <p className="description-text">

          </p>
          {user && user.activated !== undefined && !user.activated
            ? <div>
              <p className="description-text">
                Before your company can be publically listed, you must verify your email address.
              </p>
              <CanonActivate />
            </div>
            : <div><div className="text-wrapper">
              {this.props.product ? <p className="description-text">You company has been listed under <span>{this.props.product.name}</span>
               Make your company stand out by visiting your settings to add more information to your company!</p> :
               <p className="description-text">Make your company stand out by visiting your settings to add more information to your company!</p>}
            </div>
            <button onClick={this.navigateToSettings} className="onboarding-button">Settings</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  },
  toggleOverlay: () => {
    dispatch(toggleOverlay());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSuccess);
