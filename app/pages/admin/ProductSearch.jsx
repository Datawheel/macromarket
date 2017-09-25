import React from "react";
import {connect} from "react-redux";
import {Suggest} from "@blueprintjs/labs";
import {Classes, MenuItem} from "@blueprintjs/core";
import "./Admin.css";
import "./Settings.css";
import "@blueprintjs/labs/dist/blueprint-labs.css";

class ProductSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProduct = ({handleClick, isActive, item: product}) =>
    <MenuItem
      className={isActive ? Classes.ACTIVE : ""}
      key={product.id}
      onClick={handleClick}
      text={`${product.name}`}
      shouldDismissPopover={false}
    />

  filterProducts = (query, products) => {
    if (query.length < 3) {
      return [];
    }
    return products.filter(p =>
      `${p.id_hs92} ${p.name.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0
    );
  }

  selectProduct = product => {
    this.props.selectProduct(product);
  }

  render() {
    const {products} = this.props;

    return (
      <div className="pt-form-group">
        <label className="pt-label" htmlFor="example-form-group-input-a">
          <span className="pt-icon pt-icon-insert"></span> Search for a product
        </label>
        <div className="pt-form-content">
          <Suggest
            inputValueRenderer={() => ""}
            itemRenderer={this.renderProduct}
            itemListPredicate={this.filterProducts}
            items={products.filter(p => p.id.length === 8)}
            onItemSelect={this.selectProduct}
            resetOnSelect={true}
            resetOnClose={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.data.products
});

export default connect(mapStateToProps)(ProductSearch);
