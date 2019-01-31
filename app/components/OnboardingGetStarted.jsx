import React from "react";
import {connect} from "react-redux";
import {OnboardingSignUp} from "components/OnboardingSignUp";
import {OnboardingLogin} from "components/OnboardingLogin";
import {updateSlideOverlay} from "actions/onboardingActions";

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

    return <div className="slide-inner">
      <div className="slide-content">
        {!user && !isSignupFormVisible && !isLoginFormVisible &&
              <div>
                <div className="text-wrapper">
                  <p className="description-text">Thank you for visiting Macro Market. Macro Market is a global directory of exporters and importers. Create an account to list your company, or search for other companies. It's free.</p>
                  {product &&
                  <div className="product-wrapper">
                    <p>Create an account to be listed under <span>{product.name}</span>.</p>
                  </div>}
                </div>
                <div>
                  <button className="onboarding-button" onClick={() => this.setState({isSignupFormVisible: true})}>Sign Up</button>
                  <button className="onboarding-button" onClick={() => this.setState({isLoginFormVisible: true})}>Log In</button>
                </div>
                <p className="hr-line">or</p>
                <button className="onboarding-button" onClick={this.props.toggleOverlay}>Continue to the site</button>
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
            <div>
              <div className="text-wrapper">
                {product &&
                <div className="product-wrapper">
                  <p>Interested in being listed under <span>{product.name}</span>?</p>
                </div>}
                <p className="description-text">Thank you for visiting Macro Market. Macro Market is a global directory of exporters and importers. Create an account to list your company, or search for other companies. It's free.</p>
              </div>
              <button className="onboarding-button" onClick={() => updateSlideOverlay(1)}>Get Started</button>
              <p className="hr-line">or</p>
              <button className="onboarding-button" onClick={this.props.toggleOverlay}>Continue to the site</button>
            </div>
        }
      </div>

    </div>;
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
