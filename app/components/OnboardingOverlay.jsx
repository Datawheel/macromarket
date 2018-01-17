import React from "react";
import {connect} from "react-redux";
import OnboardingSlide from "./OnboardingSlide";
import {toggleOverlay, updateSlideOverlay} from "../actions/onboardingActions";

class OnboardingOverlay extends React.Component {
  constructor(props) {
    super(props);
    const {toggleOverlay} = props;
    const {source} = props.query;
    if (source && source === "oec") {
      toggleOverlay();
    }
  }

  render() {
    const {product, isOpen, isUserLoggedIn, slideNumber, updateSlideOverlay} = this.props;
    return (
      <div style={{display: isOpen ? "inline" : "none"}}>
        <OnboardingSlide
          product={product}
          isUserLoggedIn={isUserLoggedIn}
          slideNumber={slideNumber}
          updateSlideOverlay={updateSlideOverlay}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleOverlay: () => {
    dispatch(toggleOverlay());
  },
  updateSlideOverlay: newSlideNumber => {
    dispatch(updateSlideOverlay(newSlideNumber));
  }
});

const mapStateToProps = state => ({
  product: state.data.product,
  isOpen: state.onboarding.isOverlayOpen,
  isUserLoggedIn: state.auth.user !== null,
  slideNumber: state.slideOverlayNumber
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingOverlay);
