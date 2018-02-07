import React from "react";
import {connect} from "react-redux";
import {isAuthenticated} from "datawheel-canon";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import OnboardingOverlay from "./OnboardingOverlay";
import "./App.css";

import Helmet from "react-helmet";
import header from "../helmet.js";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet title={ header.title } link={ header.link } meta={ header.meta } />
        <NavBar location={this.props.location} />
        <div className="main-content">
          <OnboardingOverlay query={this.props.location && this.props.location.query} />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  isAuthenticated: () => {
    dispatch(isAuthenticated());
  }
});

export default connect(state => ({auth: state.auth}), mapDispatchToProps)(App);