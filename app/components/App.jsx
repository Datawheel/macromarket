import React from "react";
import {connect} from "react-redux";
import {isAuthenticated} from "datawheel-canon";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import "./App.css";
import Helmet from "react-helmet";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Helmet title="About" meta={[
          {
            property: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }
        ]}/>
        <NavBar location={this.props.location} />
        <div className="main-content">
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
