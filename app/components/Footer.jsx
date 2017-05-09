import React from "react";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="footer">
      <div className="logo-wrapper"><img src="/images/icons/white-oec-logo.svg" />
        <img src="/images/icons/white-market-logo.svg" /></div>
        <div className="text-wrapper">
        <p>The Observatory of Economic Complexity by Alexander Simoes is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.
        Permissions beyond the scope of this license may be available here.</p></div>
      <div className="left">
        <img className="connect" src="/images/icons/logos/connectAmericasLogo.png" ></img>
        <img className="mit" src="/images/icons/logos/mit.png" ></img>
      </div>
    </div>
    );
  }
}
