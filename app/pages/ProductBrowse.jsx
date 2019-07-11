import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchData} from "@datawheel/canon-core";
import {url} from "helpers/api.js";

import {Button, Card, Classes, Elevation, H5, Label, Slider, Switch} from "@blueprintjs/core";

import Helmet from "react-helmet";
import header from "helpers/helmet.js";

import "./ProductBrowse.css";

class ProductBrowse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {products} = this.props;
    const HsChapters = products.filter(p => p.id.length === 2);
    console.log("products!!!", products);
    console.log("HsChapters!!!", HsChapters);
    return <div className="browse">
      <h2 className="browse-title">Browse Products</h2>
      <div className="browse-content">
        <section>
          SIDE BAR!!!
        </section>
        <div className="browse-grid">
          {HsChapters.map(chapter =>
            <div className="browse-item" key={chapter.id}>
              <div className="browse-item-img" key={chapter.id} style={{backgroundImage: `url("/images/product/${chapter.id}.jpg")`}}></div>
              <Link to={`/product/browse/${chapter.id}`}>{chapter.name}</Link>
            </div>
          )}
        </div>
      </div>
    </div>;
  }
}

ProductBrowse.preneed = [
  fetchData("products", `${url}/api/products`, res => res)
];

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ProductBrowse);
