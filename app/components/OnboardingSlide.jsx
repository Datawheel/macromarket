import React from "react";
import {Login as CanonLogin} from "datawheel-canon";
import {SignUp} from "datawheel-canon";
import {OnboardingSignUp} from "./OnboardingSignUp";
import {OnboardingLogin} from "./OnboardingLogin";
import {connect} from "react-redux";
import EditProducts from "../pages/admin/EditProducts";
import {CompanyDropdown} from "./CompanyDropdown";
import api from "../api.js";

class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupFormVisible: false,
      isLoginFormVisible: false
    };
  }

  componentDidMount() {

  }

  render() {
    const {isSignupFormVisible, isLoginFormVisible} = this.state;
    const {slideNumber} = this.props;
    const productName = "Bovine";
    if (slideNumber === 0) {
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
    else if (slideNumber === 1) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {this.props.product} ?</p>
          </div>
          <SignUp/>
        </div>);
    }
    else if (slideNumber === 2) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Create a Company</p>
          </div>
        </div>);
    }
    else if (slideNumber === 3) {
      return (
        <div className="slide">
          <CanonLogin />
        </div>);
    }
    else if (slideNumber === 4) {
      return (
        <div className="slide">
          <div className="company-dropdown"></div>
          <EditProducts/>
        </div>
      );
    }
    else {
      return(<div></div>);
    }
  }
}


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
  products: state.data.products,
  user: state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
