import React, {Component} from "react";
import {connect} from "react-redux";
import {Suggest} from "@blueprintjs/select";
import {Classes, MenuItem} from "@blueprintjs/core";
import "pages/admin/Settings.css";
import "pages/admin/Admin.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

class ProductSearch extends Component {
  constructor(props) {
    super(props);
  }

  renderProduct = (product, {handleClick, modifiers, query}) =>
    <MenuItem
      className={modifiers.active ? Classes.ACTIVE : ""}
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
    const {onboardingPopup, products} = this.props;

    return (
      <div>
        {products
          ? <Suggest
            inputProps={{placeholder: "Search for a product..."}}
            inputValueRenderer={() => ""}
            itemRenderer={this.renderProduct}
            itemListPredicate={this.filterProducts}
            items={products.filter(p => p.id.length === 8)}
            noResults={"Please enter 3 or more characters."}
            onItemSelect={this.selectProduct}
            openOnKeyDown={false}
            popoverProps={onboardingPopup ? {boundary: ".slider-wrapper"} : {}}
            resetOnSelect={true}
            resetOnClose={true}
          />
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.productsForSearch
});

export default connect(mapStateToProps)(ProductSearch);
