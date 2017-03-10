import React from "react";
import {Link} from "react-router";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="footer">
      <div className="logo-wrapper"><img src="./assets/icons/white-oec-logo.svg"/></div>
      <div className="logo-wrapper">
        <img src="./assets/icons/white-market-logo.svg"/></div>
    </div>
    );
  }
}
