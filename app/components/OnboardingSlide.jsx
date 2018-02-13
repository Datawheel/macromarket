import React from "react";
import {connect} from "react-redux";
import OnboardingProducts from "./OnboardingProducts";
import OnboardingGetStarted from "./OnboardingGetStarted";
import OnboardingCompany from "./OnboardingCompany";
import OnboardingSuccess from "./OnboardingSuccess";
import {setOnboardingCompany, updateSlideOverlay} from "../actions/onboardingActions";
import {Intent, Position,  Toaster} from "@blueprintjs/core";
import api from "../api";

class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNewCompany: true,
      company: null
    }
  }

  render() {
    return (
      <div className="slider-wrapper">
        <div className={this.props.slideNumber > 0 && this.props.slideNumber < 3 ? "tabs" : "tabs hidden"}>
          <div onClick={this.props.slideNumber !== 1 ? this.props.updateSlideOverlay.bind(this, 1) : null} className={this.props.slideNumber === 1 ? "active tab" : "tab"}><p>Company</p>
          </div>
          <div className={this.props.slideNumber ===  2 ? "active tab" : "tab"}><p>Products</p>
          </div>
          <div className={`line line-${this.props.slideNumber}`}></div>
        </div>
        <button className="close" onClick={this.props.toggleOverlay}></button>
        <div className={`slide-container slide-container-${this.props.slideNumber}`}>
          <div className="slide slide-0">
            <div className="logo-wrapper">
              <img className="mm-logo" src="/images/icons/logos/macro-market.svg"></img>
              <img src="/images/icons/logos/orange-market-logo.svg"></img>
            </div>
            <OnboardingGetStarted product={this.props.product}/>
          </div>
          <div className="slide slide-1" >
            <OnboardingCompany/>
          </div>
          <div className="slide slide-2">
            <OnboardingProducts/>
          </div>
          <div className="slide slide-3">
            <OnboardingSuccess/>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  },
  setOnboardingCompany: companyId => {
    dispatch(setOnboardingCompany(companyId));
  }
});

const mapStateToProps = state => ({products: state.data.products, user: state.auth.user});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
