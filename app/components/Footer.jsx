import React from "react";

import oecLogo from "../img/icons/white-oec-logo.svg";
import marketLogo from "../img/icons/white-market-logo.svg";
import mitLogo from "../img/icons/logos/mit.png";
import connectLogo from "../img/icons/logos/connectAmericasLogo.png";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="footer">
      <div className="logo-wrapper"><img src={oecLogo}/>
        <img src={marketLogo}/></div>
        <div className="text-wrapper">
        <p>The Observatory of Economic Complexity by Alexander Simoes is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.
        Permissions beyond the scope of this license may be available here.</p></div>
      <div className="left">
        <img className="connect" src={connectLogo}></img>
        <img className="mit" src={mitLogo}></img>
      </div>
    </div>
    );
  }
}
