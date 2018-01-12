import React from "react";
import {connect} from "react-redux";
import OnboardingSlide from "./OnboardingSlide";

class OnboardingOverlay extends React.Component {
  constructor(props) {
    super(props);
    const {source} = props.query;
    const isVisible = source && source === "oec";
    this.state = {isVisible};
  }

  render() {
    return (
      <div style={{display: this.state.isVisible ? "inline" : "none"}}>
          return (<OnboardingSlide></OnboardingSlide>);
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({product: state.data.product});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingOverlay);
