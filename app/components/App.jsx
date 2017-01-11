import React from "react";
import {Link} from "react-router";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/company">Company</Link></li>
          <li><Link to="/country">Country</Link></li>
          <li><Link to="/product">Product</Link></li></ul>
      </div>
    );
  }

}
