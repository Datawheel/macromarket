import React from "react";
import {Link} from "react-router";


export default class Company extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <p>List of Companies</p>
      <ul><li><Link to="/company/123">Company 123</Link></li>
      <li><Link to="/company/345">Company 345</Link></li>
      </ul>
    </div>;
  }

}
