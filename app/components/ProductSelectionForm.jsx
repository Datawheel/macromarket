import React from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/productsActions";
import {fetchProductsByCompany} from "../actions/tradesActions";
import ProductSelection from "./ProductSelection.jsx";

class ProductSelectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      tradesToDelete: [],
      h2: null,
      h4: null,
      h6: null
    };
  }

  componentWillMount() {
    console.log(this.props);
    this.props.fetchProducts();
    if (this.props.company) {
      this.props.fetchProductsByCompany(this.props.company.id);
    }
  }

  addTrade = product => {
    const trade = {
      Product: product
    };
    this.setState(state => {
      state.trades = state.trades.concat([trade]);
      return state;
    });

  }

  setH2 = h2 => {
    this.setState({h2});
    this.setState({h4: null});
  }

  setH4 = h4 => {
    this.setState({h4});
  }

  saveProducts = allProducts => {
    let productsToSave = [];
    allProducts.map(trade => {
      if (!this.state.tradesToDelete.includes(trade.product_id)) {
        productsToSave.push(trade);
      }
    });
    this.props.saveProducts(productsToSave);
    this.props.deleteTradesByProduct(this.state.tradesToDelete, this.props.company.id);
  }

  deleteTrade = trade => {
    if (trade.id) {
      this.setState(state => {
        state.tradesToDelete = state.tradesToDelete.concat([trade.product_id]);
        return state;
      });
    }
    else {
      const index = this.state.trades.indexOf(trade);
      const updatedTrades = this.state.trades.slice();
      updatedTrades.splice(index, 1);
      this.setState({trades: updatedTrades});
    }
  }

  render() {
    const {products, loading, error} = this.props;
    let allProducts = this.state.trades;

    if (this.props.trades) {
      allProducts = this.state.trades.concat(this.props.trades.imports).concat(this.props.trades.exports);
    }

    const filteredProducts = allProducts.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj.product_id).indexOf(obj.product_id) === pos;
    });

    if (loading || !products) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    return (
      <div className="form">
        <p>Selection
        </p>
        {filteredProducts.map((trade, index) => {
          return (
            <div key={index}>
              {this.state.tradesToDelete.includes(trade.product_id)
                ? null
                : <div>
                  <h2>{trade.Product.name}</h2>
                  <button onClick={this.deleteTrade.bind(this, trade)}>Delete</button>
                </div>
              }
            </div>
          );
        })}
        <h3>List of Products
        </h3>
        <div className="product-selection h2-selection">
          {products.map((h2, index) => {
            return (
              <div key={index}>
                <p onClick={this.setH2.bind(this, h2)}>{h2.name}</p>
              </div>
            );
          })}</div>

        <div className="product-selection">{this.state.h2
            ? <ProductSelection select={this.setH4} products={this.state.h2.values}/>
            : null}</div>
        <div className="product-selection">{this.state.h4
            ? <ProductSelection select={this.addTrade} products={this.state.h4.values}/>
            : null}</div>
        <button onClick={() => this.saveProducts(allProducts)}>Save and Continue</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchProductsByCompany: id => {
      dispatch(fetchProductsByCompany(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error || null,
    trades: state.trades.trades,
    tradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelectionForm)
