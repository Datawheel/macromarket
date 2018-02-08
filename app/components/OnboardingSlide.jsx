import React from "react";
import {connect} from "react-redux";
import OnboardingProducts from "./OnboardingProducts";
import OnboardingGetStarted from "./OnboardingGetStarted";
import OnboardingCompany from "./OnboardingCompany";

class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {}

  render() {
    console.log(this.props.slideNumber);
    const {slideNumber} = this.props;
    const slide0 = {width: "600px"};
    const slide1 = {width: "700px"};
    const slide2 = {width: "800px"};
    return (
      <div className="slider-wrapper">
        <button className="close" onClick={this.props.toggleOverlay}></button>
        <div className={`slide-container slide-container-${this.props.slideNumber}`}>
          <div className="slide" style={slide0}>
            <OnboardingGetStarted product={this.props.product}/>
            <button onClick={this.props.updateSlideOverlay.bind(this, 1)}>Next Slide</button>

          </div>
          <div className="slide" style={slide1}>
            <OnboardingCompany/>
          </div>
          <div className="slide" style={slide2}>
            <OnboardingProducts/>
          </div>
        </div>
      </div>
    );
    // if (slideNumber === 0) {
    //   return (
    //     <div className="slide slide0">
    //       <button className="close" onClick={this.props.toggleOverlay}>close</button>
    //       <OnboardingGetStarted product={this.props.product}/>
    //     </div>
    //   );
    // }
    // else if (slideNumber === 1) {
    //   return (
    //     <div className="slide slide1">
    //       <button className="close" onClick={this.props.toggleOverlay}>close</button>
    //       <OnboardingCompany/>
    //     </div>
    //   );
    // }
    // else if (slideNumber === 2) {
    //   return (
    //     <div className="slide slide2">
    //       <button className="close" onClick={this.props.toggleOverlay}>close</button>
    //       <OnboardingProducts/>
    //     </div>
    //   );
    // }
    // else {
    //   return <div></div>;
    // }
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({products: state.data.products, user: state.auth.user});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
