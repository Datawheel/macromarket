import React from "react";
import {connect} from "react-redux";
import EditProducts from "../pages/admin/EditProducts";
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
    const productName = "Bovine";
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
        <div className="slide">
          <div className="product-wrapper">
            <p>Create a Company</p>
          </div>
        </div>);
    }
    else if (slideNumber === 3) {
      return (
        <div className="slide">
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
