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
    const {user, updateSlideOverlay} = this.props;

    return (
      <div className="slide">
        <div className="product-wrapper">
          <p>Interested in being listed under {this.props.product} ?</p>
        </div>
        {!user && !isSignupFormVisible && !isLoginFormVisible &&
            <div>
              <button onClick={() => this.setState({isSignupFormVisible: true})}>Sign Up</button>
              <button onClick={() => this.setState({isLoginFormVisible: true})}>Log In</button>
            </div>
        }
        {isSignupFormVisible &&
            <OnboardingSignUp/>
        }
        {isLoginFormVisible &&
            <OnboardingLogin/>
        }
        {(isSignupFormVisible || isLoginFormVisible) &&
            <button onClick={() => this.setState({isSignupFormVisible: false, isLoginFormVisible: false})}>Back</button>
        }
        {user &&
            <button onClick={() => updateSlideOverlay(1)}>Get Started</button>
        }

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
