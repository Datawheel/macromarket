import React from "react";
import {connect} from "react-redux";
import OnboardingSlide from "./OnboardingSlide";
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
  },
  setOnboardingProduct: company => {
    dispatch(setOnboardingProduct(company));
  }
});

const mapStateToProps = state => ({
  product: state.data.product,
  isOpen: state.onboarding.isOverlayOpen,
  isUserLoggedIn: state.auth.user !== null,
  slideNumber: state.onboarding.slideOverlayNumber
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingOverlay);
