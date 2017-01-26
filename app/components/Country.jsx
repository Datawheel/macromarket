import React from "react";
import {Link} from "react-router";

export default class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div><p>List of Countries </p>
      <ul><li><Link to="/country/123">Country 123</Link></li>
      <li><Link to="/country/345">Country 345</Link></li>
      </ul>
    </div>);
  }
}
