import React, {Component} from "react";
import {connect} from "react-redux";
import {isAuthenticated} from "@datawheel/canon-core";
import Helmet from "react-helmet";
import header from "helpers/helmet.js";
import NavBar from "components/NavBar.jsx";
import Footer from "components/Footer.jsx";
import OnboardingOverlay from "components/OnboardingOverlay";
import {toggleOverlay} from "actions/onboardingActions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("this.props.location.query.source", this.props.location.query.source);
    if (this.props.location.query.source === "oec") {
      this.props.toggleOverlay();
    }
  }

  render() {
    const {isOpen} = this.props;
    return <div className={isOpen ? "overlayOpen overlay-bg" : "overlay-bg"}>
      <Helmet title={ header.title } link={ header.link } meta={ header.meta } />
      <NavBar location={this.props.location} />
      <OnboardingOverlay query={this.props.location.query} />
      <div className="main-content">
        <div>{this.props.children}</div>
        <Footer />
      </div>
    </div>;
  }
}

const mapDispatchToProps = dispatch => ({
  toggleOverlay: () => {
    dispatch(toggleOverlay());
  },
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({isOpen: state.onboarding.isOverlayOpen, auth: state.auth}), mapDispatchToProps)(App);
