import React from "react";
import {Link, browserHistory} from "react-router";

import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import Search from "./Search.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <NavBar location={this.props.location}></NavBar>
        <div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}
