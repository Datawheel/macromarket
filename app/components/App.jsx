import React from "react";
import {connect} from "react-redux";
import {isAuthenticated} from "datawheel-canon";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import OnboardingOverlay from "./OnboardingOverlay";
import "./App.css";
import {toggleOverlay} from "../actions/onboardingActions";
import Helmet from "react-helmet";
import header from "../helmet.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.location.query.source === "oec") {
      this.props.toggleOverlay();
    }
  }

  render() {
    const {isOpen} = this.props;
    return (
      <div className={isOpen ? "overlayOpen overlay-bg" : "overlay-bg"}>
        <Helmet title={ header.title } link={ header.link } meta={ header.meta } />
        <NavBar location={this.props.location} />
        <OnboardingOverlay/>
        <div className="main-content">
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
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
