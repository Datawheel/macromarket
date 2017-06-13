import React from "react";
import {connect} from "react-redux";
import {browserHistory} from "react-router";
import {uploadImage, deleteCompany} from "../actions/userActions";
import {deleteTradeByProduct, createTrade} from "../actions/tradesActions";
import {fetchSettingsTradesByCompany} from "../actions/tradesActions";
import Sidebar from "components/Sidebar";
import "../components/Form.css";

class ProductSelection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSettingsTradesByCompany(this.props.companyId);
  }

  render() {
    const {products} = this.props;
    const filteredProducts = {};

    if (!products) {
      return (<div className="selection-wrapper">
        <div className="selected-products-wrapper"></div></div>);
    }
    products.map(product => {
      if (!filteredProducts[product.product_id] && product.trade_flow === this.props.tradeFlow) {
        filteredProducts[product.product_id] = product
      }
    });
    console.log(filteredProducts, "DONNNE");

    return (
      <div className="selection-wrapper">
        <div className="selected-products-wrapper">
          {Object.keys(filteredProducts).map((product, index) => {
            return (
              <div className="selected-product-wrapper" key={index}>
                <div>
                  <span>{filteredProducts[product].Product.name}</span>
                  <div className="delete" onClick={this.props.deleteTradeByProduct.bind(this, this.props.companyId, filteredProducts[product].product_id, this.props.tradeFlow)}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSettingsTradesByCompany: id => {
      dispatch(fetchSettingsTradesByCompany(id));
    },
    deleteTradeByProduct: (companyId, productId, tradeFlow) => {
      dispatch(deleteTradeByProduct(companyId, productId, tradeFlow));
    }
  };
}

const mapStateToProps = state => {
  return {products: state.trades.settingsTrades, productsLoading: state.trades.loading, productsError: state.trades.error}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection);
