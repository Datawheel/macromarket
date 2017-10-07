import React from "react";
import "./Footer.css";

const Footer = () =>
  <footer>
    <div className="footer-links">
      <div className="link-column">
        <div className="title">Companies</div>
        <a href="/company/1">Super Special Company 1</a>
        <a href="/company/2">Super Special Company 2</a>
        <a href="/company/3">Super Special Company 3</a>
        <a href="/company/">View more...</a>
      </div>
      <div className="link-column">
        <div className="title">Countries</div>
        <a href="/country/sacol">Colombia</a>
        <a href="/country/sabra">Brazil</a>
        <a href="/country/aschn">China</a>
        <a href="/country/asare">United Arab Emirites</a>
        <a href="/country/">View more...</a>
      </div>
      <div className="link-column">
        <div className="title">Products</div>
        <a href="/product/115310">Jute Woven Fabric</a>
        <a href="/product/063105">Mixed Mineral or Chemical Fertilizers</a>
        <a href="/product/01030342">Tunas (yellowfin) frozen, whole</a>
        <a href="/product/">View more...</a>
      </div>
      <div className="link-column">
        <div className="title">Community</div>
        <a href="https://connectamericas.com/" rel="noopener noreferrer" target="_blank">ConnectAmericas</a>
        <a href="http://atlas.media.mit.edu/" rel="noopener noreferrer" target="_blank">Observatory of Economic Complexity</a>
        <a href="https://www.media.mit.edu/groups/collective-learning/overview/" rel="noopener noreferrer" target="_blank">Collective Learning Group</a>
        <a href="https://www.media.mit.edu/" rel="noopener noreferrer" target="_blank">MIT Media Lab</a>
      </div>
    </div>
    <div className="footer-meta">
      <div className="footer-copyright">
      2017 Macro Market. <a href="/terms">Terms of service</a> and <a href="/privacy">privacy policy</a> apply.
      </div>
      <div className="footer-logos">
        <img className="connect" src="/images/icons/logos/connectAmericasLogo.png" />
        <img className="collective-learning" src="/images/icons/logos/collective-learning.png" alt="Collective Learning Logo" />
        <img className="media-lab" src="/images/icons/logos/mit-media-lab.png" alt="MIT Media Lab Logo" />
        <img className="datawheel" src="/images/icons/logos/datawheel-sq.png" alt="Datawheel Logo" />
      </div>
    </div>
  </footer>;

export default Footer;
