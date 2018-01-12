import React from "react";
import {connect} from "react-redux";
import OnboardingSlide from "./OnboardingSlide";

class OnboardingOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const {product} = this.props;
    console.log(product);
    return (<OnboardingSlide></OnboardingSlide>);
  }
}

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({product: state.data.product});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingOverlay);
