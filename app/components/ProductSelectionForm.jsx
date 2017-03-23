import React from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../actions/productsActions";
import {fetchProductsByCompany} from "../actions/tradesActions";

class ProductSelectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      tradesToDelete: []
    };
  }

  componentWillMount() {
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

  saveProducts = allTrades => {
    this.props.saveProducts(allTrades, this.state.tradesToDelete);
  }

  deleteTrade = trade => {
    if (trade.id) {
      this.setState(state => {
        state.tradesToDelete = state.tradesToDelete.concat([trade]);
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
    let allTrades = this.state.trades;

    if (this.props.trades) {
      allTrades = this.state.trades.concat(this.props.trades.imports).concat(this.props.trades.exports);
    }
console.log(this.props.trades, "props");
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
        {allTrades.map((trade, index) => {
          return (
            <div key={index}>
              {this.state.tradesToDelete.includes(trade)
                ? null
                : <div>
                  <h2>{trade.Product.name}</h2>
                  <button onClick={this.deleteTrade.bind(this, trade)}>Delete</button>
                </div>}
            </div>
          );
        })}
        <p>List of Products
        </p>
        {products.map((product, index) => {
          return (
            <div>
              {index < 100
                ? <p onClick={this.addTrade.bind(this, product)}>{product.name}</p>

                : null}</div>
          );
        })}
        <button onClick={() => this.saveProducts(allTrades)}>Save and Continue</button>
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
