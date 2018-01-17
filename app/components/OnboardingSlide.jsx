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
  }

  componentDidMount() {

  }

  render() {
    const slideNum = 0;
    const productName = "Bovine";
    if (slideNum === 0) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {this.props.product} ?</p>
          </div>
          <button>Sign Up</button>
          <button>Log In</button>
          <OnboardingSignUp/>
          <OnboardingLogin/>
        </div>
      );
    }
    else if (slideNum === 1) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {this.props.product} ?</p>
          </div>
          <SignUp/>
        </div>);
    }
    else if (slideNum === 2) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Create a Company</p>
          </div>
        </div>);
    }
    else if (slideNum === 3) {
      return (
        <div className="slide">
          <CanonLogin />
        </div>);
    }
    else if (slideNum === 4) {
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
