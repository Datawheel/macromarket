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
    return (
      <div className="slider-wrapper">
        <div className="tabs">
          <div className={this.props.slideNumber === 1 ? "active tab" : "tab"}><p>Company</p>
            <div className="line"></div>
          </div>
          <div className={this.props.slideNumber ===  2 ? "active tab" : "tab"}><p>Products</p>
            <div className="line"></div>
          </div>
        </div>
        <button className="close" onClick={this.props.toggleOverlay}></button>
        <div className={`slide-container slide-container-${this.props.slideNumber}`}>
          <div className="slide slide-0">
            <OnboardingGetStarted product={this.props.product}/>
            <button onClick={this.props.updateSlideOverlay.bind(this, 1)}>Next Slide</button>

          </div>
          <div className="slide slide-1" >
            <OnboardingCompany/>
          </div>
          <div className="slide slide-2">
            <OnboardingProducts/>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({products: state.data.products, user: state.auth.user});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
