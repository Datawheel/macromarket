import React from "react";
import {connect} from "react-redux";
import {isAuthenticated} from "datawheel-canon";
import NavBar from "components/NavBar.jsx";
import Footer from "components/Footer.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
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
