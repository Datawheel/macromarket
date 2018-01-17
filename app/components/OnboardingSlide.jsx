import React from "react";
import {Login as CanonLogin} from "datawheel-canon";
import {SignUp} from "datawheel-canon";
import {connect} from "react-redux";
import EditProducts from "../pages/admin/EditProducts";


class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.params);
  }

  render() {
    const slideNum = 4;
    const productName = "Bovine";
    if (slideNum === 0) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {productName} ?</p>
          </div>
          <button>Sign up</button>
          <button>Login</button>
        </div>
      );
    }
    else if (slideNum === 1) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {productName} ?</p>
          </div>
          <SignUp/>
        </div>);
    }
    else if (slideNum === 2) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Create a Company</p>
          </div>
        </div>);
    }
    else if (slideNum === 3) {
      return (
        <div className="slide">
          <CanonLogin />
        </div>);
    }
    else if (slideNum === 4) {
      return (
        <div className="slide">
          <div className="company-dropdown"></div>
  
        </div>
      );
    }
    else {
      return(<div></div>);
    }
  }
}


const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({products: state.data.products});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
