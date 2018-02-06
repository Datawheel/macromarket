import React from "react";
import {OnboardingSignUp} from "./OnboardingSignUp";
import {OnboardingLogin} from "./OnboardingLogin";

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

    return (
      <div className="slide">
        <div className="product-wrapper">
          <p>Interested in being listed under {this.props.product} ?</p>
        </div>
        {!isSignupFormVisible && !isLoginFormVisible &&
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

      </div>
    );
  }
}

export default OnboardingGetStarted;
