import React from "react";
import {connect} from "react-redux";
import {fetchTradesForSettings} from "../actions/tradesActions";
import ProductSelection from "./ProductSelection.jsx";
import CountrySelection from "./CountrySelection.jsx";
import {deleteTrades} from "../actions/tradesActions";
import {saveTrades} from "../actions/tradesActions";
import {Link} from "react-router";

class TradeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productsToDelete: [],
      exportsToSave: [],
      importsToSave: [],
      tradesToSave: [],
      tradesToDelete: [],
      saved: false
    };
  }

  componentWillMount() {
    if (this.props.companyId) {
      this.props.fetchTradesForSettings(this.props.companyId);
    }
  }

  save = () => {
    const allTradesToDelete = [];
    const tradesToSave = [];
    this.state.productsToDelete.map(product => {
      allTradesToDelete.push({product_id: product.product_id, company_id: this.props.company_id, trade_flow: product.trade_flow});
    });
    this.state.tradesToDelete.map(trade => {
      allTradesToDelete.push({id: trade.trade_id});
    });
    this.state.tradesToSave.map(trade => {
      tradesToSave.push({company_id: this.props.companyId, country_id: trade.country_id, trade_flow: trade.trade_flow, product_id: trade.product_id});
    });
    this.props.nextSlide();
    if (tradesToSave.length !== 0 || allTradesToDelete.length !== 0) {
      this.props.saveTrades(tradesToSave, allTradesToDelete);
    } else {
      this.setState({saved: true});
    }
  }

  addProduct = product => {
    if (product.trade_flow === "exports") {
      this.setState(state => {
        state.exportsToSave = state.exportsToSave.concat([product]);
        return state;
      });
    } else {
      this.setState(state => {
        state.importsToSave = state.importsToSave.concat([product]);
        return state;
      });
    }
  }

  addCountry = trade => {
    this.setState(state => {
      state.tradesToSave = state.tradesToSave.concat([trade]);
      return state;
    });
  }

  deleteCountry = trade => {
    this.setState(state => {
      state.tradesToDelete = state.tradesToDelete.concat([trade]);
      return state;
    });
  }

  isDeleted = product => {
    let found = false;
    const arr = this.state.productsToDelete;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].product_id === product.product_id && arr[i].trade_flow === product.trade_flow) {
        found = true;
        break;
      }
    }
    return found;
  }

  deleteProduct = product => {
    if (!product.newProduct) {
      this.setState(state => {
        state.productsToDelete = state.productsToDelete.concat([
          {
            product_id: product.product_id,
            trade_flow: product.trade_flow
          }
        ]);
        return state;
      });
    }
    else {
      if (product.trade_flow === "exports") {
        const filtered = this.state.exportsToSave.filter(obj => {
          return obj.product_id !== product.product_id;
        });
        this.setState(state => {
          state.exportsToSave = filtered;
          return state;
        });
      }
      else {
        const filtered = this.state.importsToSave.filter(obj => {
          return obj.product_id !== product.product_id;
        });
        this.setState(state => {
          state.importsToSave = filtered;
          return state;
        });
      }
    }
  }

  getProducts = (trades, tradeFlow) => {
    const products = {};
    //  add saved products and remove deleted trades
    let allTrades = [];
    if (tradeFlow === "exports") {
      allTrades = trades.concat(this.state.exportsToSave);
    }
    if (tradeFlow === "imports") {
      allTrades = trades.concat(this.state.importsToSave);
    }

    allTrades.map(trade => {
      if (!this.isDeleted(trade) && trade.trade_flow === tradeFlow) {
        if (!products[trade.product_id]) {
          let countries = [];
          let newProduct = false;
          if (trade.Country) {
            countries = [
              {
                trade_id: trade.id,
                country: trade.Country
              }
            ];
          }
          if (trade.newProduct) {
            newProduct = true;
          }
          products[trade.product_id] = {
            product_name: trade.Product.name,
            product_id: trade.product_id,
            newProduct,
            trade_flow: trade.trade_flow,
            countries
          };
        } else {
          products[trade.product_id].countries.push({trade_flow: tradeFlow, trade_id: trade.id, country: trade.Country});
        }
      }
    });
    return products;
  }

  render() {
    const {trades, loading, error} = this.props;
    if (loading || !trades) {
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

    const exports = this.getProducts(this.props.trades, "exports");
    const imports = this.getProducts(this.props.trades, "imports");

    return (
      <div>
        {this.props.slide === 1
          ? <div className="form">
              <b>Products | Import</b>
              <p>Select a maximum of 5 products.</p>
              <ProductSelection tradeFlow={"imports"} addProduct={this.addProduct} deleteProduct={this.deleteProduct} selectedProducts={imports}/>
              <div className="selected-products-wrapper">
                {Object.keys(imports).map((product, index) => {
                  return (
                    <div className="selected-product-wrapper" key={index}>
                      <div>
                        <span>{imports[product].product_name}</span>
                        <div className="delete" onClick={this.deleteProduct.bind(this, imports[product])}></div>
                      </div>
                    </div>
                  );
                })}</div>
              <b>Products | Exports</b>
              <p>Select a maximum of 5 products.</p>
              <ProductSelection tradeFlow={"exports"} addProduct={this.addProduct} deleteProduct={this.deleteProduct} selectedProducts={exports}/>
              <div className="selected-products-wrapper">
                {Object.keys(exports).map((product, index) => {
                  return (
                    <div className="selected-product-wrapper" key={index}>
                      <div>
                        <span>{exports[product].product_name}</span>
                        <div className="delete" onClick={this.deleteProduct.bind(this, exports[product])}></div>
                      </div>
                    </div>
                  );
                })}</div>
              <button onClick={this.props.nextSlide}>Next</button>
            </div>
          : null}

        {this.props.slide === 2
          ? <div className="form">
              {Object.keys(imports).length !== 0
                ? <div>
                    <b>Imports</b>
                    <p>Select a maximum of 5 countries per product</p>
                  </div>
                : null}
              {Object.keys(imports).map((product, index) => {
                return (
                  <div key={index} className="country-selection-wrapper">
                    {!this.state.productsToDelete.includes(imports[product])
                      ? <div>
                          <p className="product">{imports[product].product_name}</p>
                          <CountrySelection addCountry={this.addCountry} deleteCountry={this.deleteCountry} trade={imports[product]}/>
                        </div>
                      : null}
                  </div>
                );
              })}
              {Object.keys(exports).length !== 0
                ? <div>
                    <b>Exports</b>
                    <p>Select a maximum of 5 countries per product</p>
                  </div>
                : null}
              {Object.keys(exports).map((product, index) => {
                return (
                  <div key={index} className="country-selection-wrapper">
                    {!this.state.productsToDelete.includes(exports[product])
                      ? <div>
                          <p className="product">{exports[product].product_name}</p>
                          <CountrySelection addCountry={this.addCountry} deleteCountry={this.deleteCountry} trade={exports[product]}/>
                        </div>
                      : null}
                  </div>
                );
              })}

              <button onClick={this.save}>Save</button>
            </div>
          : null}
        {this.props.slide === 3
          ? <div>
              {this.props.saved || this.state.saved
                ? <div>
                    <Link to={`/company/${this.props.companyId}`}>
                      <button>See My Listing</button>
                    </Link>
                  </div>
                : <p>loading...</p>}
            </div>
          : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTradesForSettings: id => {
      dispatch(fetchTradesForSettings(id));
    },
    deleteTrades: trade => {
      dispatch(deleteTrades(trade));
    },
    saveTrades: (tradesToSave, tradesToDelete) => {
      dispatch(saveTrades(tradesToSave, tradesToDelete));
    }
  };
};

const mapStateToProps = state => {
  return {saved: state.trades.saved, trades: state.trades.settingsTrades, tradesLoading: state.trades.loading, tradesError: state.trades.error};
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeSelection);
