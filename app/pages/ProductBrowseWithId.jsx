import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchData} from "@datawheel/canon-core";
import {url} from "helpers/api.js";

import {Button, Card, Classes, Elevation, H5, Label, Slider, Switch} from "@blueprintjs/core";

import Helmet from "react-helmet";
import header from "helpers/helmet.js";

import "./ProductBrowse.css";

class ProductBrowseWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {products} = this.props;
    const {chapterId} = this.props.params;
    const thisChapter = products.filter(p => p.id.length === 4 && p.id.substr(0, 2) === chapterId);
    const Hs2Prods = products.filter(p => p.id.length === 4 && p.id.substr(0, 2) === chapterId);
    console.log("products!!!", products);
    console.log("HsChapters!!!", Hs2Prods);
    return <div className="browse">
      <h2 className="browse-title">Browse Products</h2>
      <div className="browse-content">
        <section>
          SIDE BAR!!!
        </section>
        <div className="browse-grid">
          {Hs2Prods.map(chapter =>
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

ProductBrowseWithId.preneed = [
  fetchData("products", `${url}/api/products`, res => res)
];

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ProductBrowseWithId);
