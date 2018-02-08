import React from "react";
import {connect} from "react-redux";
import OnboardingSlide from "./OnboardingSlide";
import {toggleOverlay, updateSlideOverlay} from "../actions/onboardingActions";
import "./Onboarding.css";
import {toggleOverlay, updateSlideOverlay, setOnboardingProduct} from "../actions/onboardingActions";
import api from "../api";

async function getProduct(productId) {
  const productResponse = await api.get(`api/products/${productId}`);
  return productResponse.data;
}

class OnboardingOverlay extends React.Component {
  constructor(props) {
    super(props);
    const {toggleOverlay} = props;
    const {source} = props.query;
    if (source && source === "oec") {
      toggleOverlay();
    }
  }

  async componentWillMount() {
    const {productId} = this.props.query;
    if (productId) {
      const product = await getProduct(productId);
      this.props.setOnboardingProduct(product);
    }
  }

  render() {
    const {product, isUserLoggedIn, slideNumber, updateSlideOverlay, toggleOverlay} = this.props;
    return (
      <div className="onboarding-wrapper">
        <div className="onboarding-overlay"></div>
        <OnboardingSlide
          toggleOverlay={toggleOverlay}
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
  },
  setOnboardingProduct: company => {
    dispatch(setOnboardingProduct(company));
  }
});

const mapStateToProps = state => ({
  product: state.data.product,
  isUserLoggedIn: state.auth.user !== null,
  slideNumber: state.onboarding.slideOverlayNumber
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingOverlay);
