import React from "react";
import {Link} from "react-router";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div><p>List of Products</p>
      <ul><li><Link to="/product/123">Product 123</Link></li>
      <li><Link to="/product/345">Product 345</Link></li>
      </ul>
    </div>;
  }

}
