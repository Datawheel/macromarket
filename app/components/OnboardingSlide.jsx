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
    console.log(this.props);
  }

  render() {
    const slideNum = 4;
    if (this.props.slideNumber === 0) {
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
    else if (this.props.slideNumber === 1) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Interested in being listed under {this.props.product} ?</p>
          </div>
          <SignUp/>
        </div>);
    }
    else if (this.props.slideNumber === 2) {
      return (
        <div className="slide">
          <div className="product-wrapper">
            <p>Create a Company</p>
          </div>
        </div>);
    }
    else if (this.props.slideNumber === 3) {
      return (
        <div className="slide">
          <CanonLogin />
        </div>);
    }
    else if (slideNum === 4) {
      return (
        <div className="slide">
          <div className="company-dropdown"></div>
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

const mapStateToProps = state => ({products: state.data.products});

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingSlide);
