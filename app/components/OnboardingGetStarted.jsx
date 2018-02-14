import React from "react";
import {connect} from "react-redux";
import {OnboardingSignUp} from "./OnboardingSignUp";
import {OnboardingLogin} from "./OnboardingLogin";
import {updateSlideOverlay} from "../actions/onboardingActions";

class OnboardingGetStarted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupFormVisible: false,
      isLoginFormVisible: false
    };
  }

  render() {
    const {isSignupFormVisible, isLoginFormVisible} = this.state;
    const {user, updateSlideOverlay, product} = this.props;

    return (
      <div className="slide-inner">
        <div className="slide-content">
          {product &&
                <div className="text-wrapper">
                  <div className="product-wrapper">
                    <p>Interested in being listed under <span>{product.name}</span>?</p>
                  </div>
                  <p className="description-text">Macro Market is a marketplace for exporting and importing goods. Create an account to list your company under different products and countries!</p>
                </div>
          }
          {!user && !isSignupFormVisible && !isLoginFormVisible &&
              <div>
                <button className="onboarding-button" onClick={() => this.setState({isSignupFormVisible: true})}>Sign Up</button>
                <button className="onboarding-button" onClick={() => this.setState({isLoginFormVisible: true})}>Log In</button>
              </div>
          }
          {isSignupFormVisible &&
              <OnboardingSignUp/>
          }
          {isLoginFormVisible &&
              <OnboardingLogin/>
          }
          {(isSignupFormVisible || isLoginFormVisible) &&
              <button className="onboarding-button" onClick={() => this.setState({isSignupFormVisible: false, isLoginFormVisible: false})}>Back</button>
          }
          {user &&
              <button className="onboarding-button" onClick={() => updateSlideOverlay(1)}>Get Started</button>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingGetStarted);
