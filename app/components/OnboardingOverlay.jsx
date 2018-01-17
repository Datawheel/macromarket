import React from "react";
import {connect} from "react-redux";
import OnboardingSlide from "./OnboardingSlide";
import {toggleOverlay} from "../actions/onboardingActions";

class OnboardingOverlay extends React.Component {
  constructor(props) {
    super(props);
    const {source, toggleOverlay} = props.query;
    if (source && source === "oec") {
      toggleOverlay();
    }
  }

  render() {
    return (
      <div style={{display: this.props.isOpen ? "inline" : "none"}}>
        <p>Sup Sabrina! :)</p>
        <OnboardingSlide></OnboardingSlide>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleOverlay: () => {
    dispatch(toggleOverlay());
  }
});

const mapStateToProps = state => ({
  product: state.data.product,
  isOpen: state.onboarding.isOverlayOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingOverlay);
