import React from "react";
import {connect} from "react-redux";
import {Suggest} from "@blueprintjs/labs";
import {Classes, MenuItem} from "@blueprintjs/core";
import "../../components/Form.css";
import "../../components/Settings.css";
import "@blueprintjs/labs/dist/blueprint-labs.css";

class ProductSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  renderProduct = p => {
    const {handleClick, isActive, item: product} = p;
    // console.log(p)

    return (
      <MenuItem
        className={isActive ? Classes.ACTIVE : ""}
        key={product.id}
        onClick={handleClick}
        text={`${product.name}`}
        shouldDismissPopover={false}
      />
    );

    // return (
    //   <MenuItem
    //     iconName={this.isCountrySelected(country) ? "tick" : "blank"}
    //     key={country.id}
    //     label={country.id_3char ? country.id_3char.toUpperCase() : ""}
    //     onClick={handleClick}
    //     text={`${country.name}`}
    //     shouldDismissPopover={false}
    //   />
    // );
  }

  filterProducts = (query, products) => {
    console.log(query, "||", products.slice(4));
    // return products.slice(0, 4);
    // return `${product.id_hs92} ${product.name.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0;
    if (query.length < 3) {
      return [];
    }
    return products.filter(p => {
      return `${p.id_hs92} ${p.name.toLowerCase()}`.indexOf(query.toLowerCase()) >= 0;
    });
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

const mapDispatchToProps = dispatch => ({

});

const mapStateToProps = state => ({
  company: state.data.company,
  countries: state.data.countries,
  products: state.data.products,
  user: state.authentication.user
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
