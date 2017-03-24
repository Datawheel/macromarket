import React from "react";
import Dropdown from "./DropDown.jsx";

export default class ProductSelection extends React.Component {
  constructor(props) {
    super(props);
    this.content = this.props.content;
    this.state = {
      selectedProducts: []
    };
  }

  selectProducts = product => {
    this.setState(state => {
      state.selectedProducts = state.selectedProducts.concat([product]);
      return state;
    });

    this.props.addTrade(product, this.props.trade);
  }

  render() {
    // let selected = [];
    // if (this.props.savedProducts) {
    //   selected = this.state.selectedProducts.concat(this.props.savedProducts);
    // }

    return (
      <div>
        {this.props.products.map((product, index) => {
          return (
            <div key={index} onClick={this.props.select.bind(this, product)}><p>{product.name}</p></div>
          );
        })}
      </div>
    );
  }
}
