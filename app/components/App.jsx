import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";

import NavBar from "./NavBar.jsx";
import Search from "./Search.jsx";
import Footer from "./Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    document.addEventListener("keydown", () => {
      // 's' key
      // if (event.keyCode === 83) {
      //   if (event.target.tagName !== "INPUT") {
      //     event.preventDefault();
      //     this.props.activateSearch(true);
      //   }
      // }
      // 'esc' key
      if (event.keyCode === 27) {
        event.preventDefault();
        this.props.activateSearch(false);
      }

    }, false);
  }

  render() {
    return (
      <div>
        <NavBar location={this.props.location}></NavBar>
        <div className="main-content">
          {this.props.children}
              <Footer></Footer>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchActive: state.searchActive
});

const mapDispatchToProps = dispatch => ({
  activateSearch: activeState => {
    dispatch({
      type: "ACTIVATE_SEARCH",
      data: activeState
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
