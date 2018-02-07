import React from "react";
import {connect} from "react-redux";
import OnboardingProducts from "./OnboardingProducts";
import OnboardingGetStarted from "./OnboardingGetStarted";
import OnboardingCompany from "./OnboardingCompany";
import api from "../api.js";

class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const {slideNumber} = this.props;
    if (slideNumber === 0) {
      return (
        <OnboardingGetStarted product={this.props.product}/>
      );
    }
    else if (slideNumber === 1) {
      return (
        <OnboardingCompany/>
      );
    }
    else if (slideNumber === 2) {
      return (
        <OnboardingProducts/>
      );
    }
    else {
      return <div></div>;
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
