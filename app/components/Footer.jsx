import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
    <div className="footer">

        <div className="logo-wrapper"><img src="/images/icons/logos/macro-market.svg" />
       <img src="/images/icons/logos/white-market-logo.svg" /></div>
        <div className="text-wrapper">
        <p>The Observatory of Economic Complexity by Alexander Simoes is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.
        Permissions beyond the scope of this license may be available here.</p></div>
      <div className="left">
        <img className="connect" src="/images/icons/logos/connectAmericasLogo.png" />
        <img className="collective-learning" src="/images/icons/logos/collective-learning.png" alt="Collective Learning Logo" />
        <img className="media-lab" src="/images/icons/logos/mit-media-lab.png" alt="MIT Media Lab Logo" />
        <img className="datawheel" src="/images/icons/logos/datawheel-sq.png" alt="Datawheel Logo" />
      </div>
    </div>
    );
  }
}
