import React from "react";
import {Login as CanonLogin} from "datawheel-canon";
import {SignUp} from "datawheel-canon";
import {connect} from "react-redux";
import EditProducts from "../pages/admin/EditProducts";
import {CompanyDropdown} from "./CompanyDropdown";
import api from "../api.js";

class OnboardingSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const slideNum = 5;
    if (this.props.slideNumber === 10) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {this.props.product} ?</p>
          </div>
          <button>Sign up</button>
          <button>Login</button>
        </div>
      );
    }
    else if (this.props.slideNumber === 11) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {this.props.product} ?</p>
          </div>
          <SignUp/>
        </div>);
    }
    else if (this.props.slideNumber === 21) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Create a Company</p>
          </div>
        </div>);
    }
    else if (this.props.slideNumber === 13) {
      return (
        <div className="slide">
          <CanonLogin />
        </div>);
    }
    else if (this.props.slideNumber === 14) {
      return (
        <div className="slide">
          <CanonLogin />
        </div>);
    }
    else if (slideNum === 5) {
      return (
        <div className="slide">

          <EditProducts/>
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

const mapStateToProps = state => ({
  products: state.data.products,
  user: state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
