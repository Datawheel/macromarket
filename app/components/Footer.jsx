import React from "react";

import oecLogo from "../img/icons/white-oec-logo.svg";
import marketLogo from "../img/icons/white-market-logo.svg";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="footer">
      <div className="logo-wrapper"><img src={oecLogo}/></div>
      <div className="logo-wrapper">
        <img src={marketLogo}/></div>
    </div>
    );
  }
}
