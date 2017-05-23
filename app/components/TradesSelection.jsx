import React from "react";
import {connect} from "react-redux";
import {fetchSettingsTradesByCompany} from "../actions/tradesActions";
import {deleteTradeByProduct, createTrade, deleteTradeByCountry, saveTrades} from "../actions/tradesActions";
import ProductSelection from "components/ProductSelection";
import CountrySelection from "components/CountrySelection";
import {Link} from "react-router";
//
// class TradeSelection extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productsToDelete: [],
//       exportsToSave: [],
//       importsToSave: [],
//       tradesToSave: [],
//       tradesToDelete: [],
//       saved: false,
//       importError: null,
//       exportError: null
//     };
//   }
//
//   componentDidMount() {
//     if (this.props.companyId) {
//       this.props.fetchSettingsTradesByCompany(this.props.companyId);
//     }
//   }
//
//   deleteTradesByProduct(productId, tradeFlow) {
//     console.log("asdjfkasdjflhaksdfjasd");
//     this.props.deleteTradesByProduct(this.props.companyId, productId, tradeFlow);
//   }
//
//   save = () => {
//     // const allTradesToDelete = [];
//     // const tradesToSave = [];
//     // this.state.productsToDelete.map(product => {
//     //   allTradesToDelete.push({product_id: product.product_id, company_id: this.props.company_id, trade_flow: product.trade_flow});
//     // });
//     // this.state.tradesToDelete.map(trade => {
//     //   allTradesToDelete.push({id: trade.trade_id});
//     // });
//     // this.state.tradesToSave.map(trade => {
//     //   tradesToSave.push({company_id: this.props.companyId, country_id: trade.country_id, trade_flow: trade.trade_flow, product_id: trade.product_id});
//     // });
//     // this.props.nextSlide();
//     // if (tradesToSave.length !== 0 || allTradesToDelete.length !== 0) {
//     //   this.props.saveTrades(tradesToSave, allTradesToDelete);
//     // } else {
//     //   this.setState({saved: true});
//     // }
//   }
//
//   addProduct = product => {
//     if (product.trade_flow === "exports") {
//       if (Object.keys(this.getProducts(this.props.trades, "exports")).length < 5) {
//         this.setState(state => {
//           state.exportsToSave = state.exportsToSave.concat([product]);
//           return state;
//         });
//       } else {
//         this.setState({exportError: "You can only select 5 products to export"})
//       }
//     } else {
//       if (Object.keys(this.getProducts(this.props.trades, "imports")).length < 5) {
//         this.setState(state => {
//           state.importsToSave = state.importsToSave.concat([product]);
//           return state;
//         });
//       } else {
//         this.setState({importError: "You can only select 5 products to import"})
//       }
//     }
//   }
//
//   addCountry = trade => {
//     this.setState(state => {
//       state.tradesToSave = state.tradesToSave.concat([trade]);
//       return state;
//     });
//   }
//
//   deleteCountry = trade => {
//     // this.setState(state => {
//     //   state.tradesToDelete = state.tradesToDelete.concat([trade]);
//     //   return state;
//     // });
//   }
//
//   isDeleted = product => {
//     let found = false;
//     const arr = this.state.productsToDelete;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].product_id === product.product_id && arr[i].trade_flow === product.trade_flow) {
//         found = true;
//         break;
//       }
//     }
//     return found;
//   }
//
//   deleteProduct = product => {
//     if (!product.newProduct) {
//       this.setState(state => {
//         state.productsToDelete = state.productsToDelete.concat([
//           {
//             product_id: product.product_id,
//             trade_flow: product.trade_flow
//           }
//         ]);
//         return state;
//       });
//     } else {
//       if (product.trade_flow === "exports") {
//         const filtered = this.state.exportsToSave.filter(obj => {
//           return obj.product_id !== product.product_id;
//         });
//         this.setState(state => {
//           state.exportsToSave = filtered;
//           return state;
//         });
//       } else {
//         const filtered = this.state.importsToSave.filter(obj => {
//           return obj.product_id !== product.product_id;
//         });
//         this.setState(state => {
//           state.importsToSave = filtered;
//           return state;
//         });
//       }
//     }
//   }
//
//   getProducts = (trades, tradeFlow) => {
//     const products = {};
//     //  add saved products and remove deleted trades
//     let allTrades = [];
//     if (tradeFlow === "exports") {
//       allTrades = trades.concat(this.state.exportsToSave);
//     }
//     if (tradeFlow === "imports") {
//       allTrades = trades.concat(this.state.importsToSave);
//     }
//
//     allTrades.map(trade => {
//       if (!this.isDeleted(trade) && trade.trade_flow === tradeFlow) {
//         if (!products[trade.product_id]) {
//           let countries = [];
//           let newProduct = false;
//           if (trade.Country) {
//             countries = [
//               {
//                 trade_id: trade.id,
//                 country: trade.Country
//               }
//             ];
//           }
//           if (trade.newProduct) {
//             newProduct = true;
//           }
//           products[trade.product_id] = {
//             product_name: trade.Product.name,
//             product_id: trade.product_id,
//             newProduct,
//             trade_flow: trade.trade_flow,
//             countries
//           };
//         } else {
//           products[trade.product_id].countries.push({trade_flow: tradeFlow, trade_id: trade.id, country: trade.Country});
//         }
//       }
//     });
//     return products;
//   }
//
//   render() {
//     const {trades, loading, error} = this.props;
//     if (loading || !trades) {
//       return (
//         <div className="detailed-content-wrapper">
//           <div>loading...</div>
//         </div>
//       );
//     }
//
//     if (error) {
//       return (
//         <div className="detailed-content-wrapper">
//           <h2>Error</h2>
//           <p>Please refresh the page.</p>
//         </div>
//       );
//     }
//
//     const exports = this.getProducts(this.props.trades, "exports");
//     const imports = this.getProducts(this.props.trades, "imports");
//
//     return (
//       <div>
//         {this.props.slide === 1
//           ? <div className="form">
//               <b>Products | Import</b>
//               <p>Select a maximum of 5 products.</p>
//               <ProductSelection tradeFlow={"imports"} addProduct={this.addProduct} deleteProduct={this.deleteTradesByProduct} selectedProducts={imports}/>
//               <div className="error-wrapper">{this.state.exportError
//                   ? <p>{this.state.exportError}</p>
//                   : null}</div>
//               <div className="selected-products-wrapper">
//                 {Object.keys(imports).map((product, index) => {
//                   return (
//                     <div className="selected-product-wrapper" key={index}>
//                       <div>
//                         <span>{imports[product].product_name}</span>
//                         <div className="delete" onClick={this.deleteTradesByProduct.bind(this, imports[product])}></div>
//                       </div>
//                     </div>
//                   );
//                 })}</div>
//               <b>Products | Exports</b>
//               <p>Select a maximum of 5 products.</p>
//               <ProductSelection tradeFlow={"exports"} addProduct={this.addProduct} deleteProduct={this.deleteTradesByProduct} selectedProducts={exports}/>
//               <div className="error-wrapper">{this.state.exportError
//                   ? <p>{this.state.exportError}</p>
//                   : null}</div>
//               <div className="selected-products-wrapper">
//                 {Object.keys(exports).map((product, index) => {
//                   return (
//                     <div className="selected-product-wrapper" key={index}>
//                       <div>
//                         <span>{exports[product].product_name}</span>
//                         <div className="delete" onClick={this.deleteProduct.bind(this, exports[product])}></div>
//                       </div>
//                     </div>
//                   );
//                 })}</div>
//               <button onClick={this.props.nextSlide}>Next</button>
//             </div>
//           : null}
//
//         {this.props.slide === 2
//           ? <div className="form">
//               {Object.keys(imports).length !== 0
//                 ? <div>
//                     <b>Imports</b>
//                     <p>Select a maximum of 5 countries per product</p>
//                   </div>
//                 : null}
//               {Object.keys(imports).map((product, index) => {
//                 return (
//                   <div key={index} className="country-selection-wrapper">
//                     {!this.state.productsToDelete.includes(imports[product])
//                       ? <div>
//                           <p className="product">{imports[product].product_name}</p>
//                           <CountrySelection addCountry={this.addCountry} deleteCountry={this.deleteCountry} trade={imports[product]}/>
//                         </div>
//                       : null}
//                   </div>
//                 );
//               })}
//               {Object.keys(exports).length !== 0
//                 ? <div>
//                     <b>Exports</b>
//                     <p>Select a maximum of 5 countries per product</p>
//                   </div>
//                 : null}
//               {Object.keys(exports).map((product, index) => {
//                 return (
//                   <div key={index} className="country-selection-wrapper">
//                     {!this.state.productsToDelete.includes(exports[product])
//                       ? <div>
//                           <p className="product">{exports[product].product_name}</p>
//                           <CountrySelection addCountry={this.addCountry} deleteCountry={this.deleteCountry} trade={exports[product]}/>
//                         </div>
//                       : null}
//                   </div>
//                 );
//               })}
//
//               <button onClick={this.save}>Save</button>
//             </div>
//           : null}
//         {this.props.slide === 3
//           ? <div>
//               {this.props.saved || this.state.saved
//                 ? <div>
//                     <Link to={`/company/${this.props.companyId}`}>
//                       <button>See My Listing</button>
//                     </Link>
//                   </div>
//                 : <p>loading...</p>}
//             </div>
//           : null}
//       </div>
//     );
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchSettingsTradesByCompany: id => {
//       dispatch(fetchSettingsTradesByCompany(id));
//     },
//     deleteTrades: trade => {
//       dispatch(deleteTrades(trade));
//     },
//     saveTrades: (tradesToSave, tradesToDelete) => {
//       dispatch(saveTrades(tradesToSave, tradesToDelete));
//     },
//     deleteTradeByProduct: (companyId, productId, tradeFlow) => {
//       dispatch(deleteTradesByProduct(companyId, productId, tradeFlow));
//     },
//     deleteTradeByCountry: (companyId, productId, countryId, tradeFlow) => {
//       dispatch(deleteTradesByProduct(companyId, productId, countryId, tradeFlow));
//     },
//   };
// };
//
// const mapStateToProps = state => {
//   return {saved: state.trades.saved, trades: state.trades.settingsTrades, tradesLoading: state.trades.loading, tradesError: state.trades.error};
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(TradeSelection);

class TradeSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exportsToSave: [],
      importsToSave: [],
      exportsToDelete: [],
      importsToDelete: [],
      saved: false,
      importError: null,
      exportError: null
    };
  }

  componentDidMount() {
    if (this.props.companyId) {
      this.props.fetchSettingsTradesByCompany(this.props.companyId);
    }
  }

  createTrade = (productId, countryId, tradeFlow) => {
    this.props.createTrade(this.props.companyId, productId, countryId, tradeFlow)
  }

  //Deletes all trades with the given productId and tradeFlow for this company
  deleteTradeByProduct = (product, tradeFlow) => {
    //if trade already exists
    const toSaveName = tradeFlow === "import" ? "importsToSave" : "exportsToSave";
    this.setState(state => {
      state[toSaveName] = state[toSaveName].filter(p =>  p.product_id !== product.product_id);
    });
    if (product.countries.length) {
      product.deleted = true;
      console.log(product, "DFSDFD");
      this.props.deleteTradeByProduct(this.props.companyId, product.product_id, tradeFlow);
    }
  }


  //Deletes trade with the given productId, countryId, tradeFlow for this company
  deleteTradeByCountry = (productId, countryId, tradeFlow) => {
    this.props.deleteTradeByCountry(this.props.companyId, productId, countryId, tradeFlow);

  }

  addProduct = product => {
    // if (product.trade_flow === "exports") {
    //   if (Object.keys(this.getProducts(this.props.trades, "exports")).length < 5) {
    //     this.setState(state => {
    //       state.exportsToSave = state.exportsToSave.concat([product]);
    //       return state;
    //     });
    //   } else {
    //     this.setState({exportError: "You can only select 5 products to export"})
    //   }
    // } else {
    //   if (Object.keys(this.getProducts(this.props.trades, "imports")).length < 5) {
    //     this.setState(state => {
    //       state.importsToSave = state.importsToSave.concat([product]);
    //       return state;
    //     });
    //   } else {
    //     this.setState({importError: "You can only select 5 products to import"})
    //   }
    // }

    const toSaveName = product.trade_flow === "imports" ? "importsToSave" : "exportsToSave";
    const elementToSave = this.state[toSaveName];
    const errorName = product.trade_flow === "imports" ? "importError" : "exportError";

    if(elementToSave.length < 5) {
      if(elementToSave.findIndex(element => element.product_id === product.product_id) === -1) {
        this.setState(state => {
          state[toSaveName] = state[toSaveName].concat([product])
          return state;
        });
      }
    }
    else {
      this.setState(state => {
          state[errorName] = `You can only select 5 products to ${product.trade_flow}`
          return state;
        });
    }

  }

  getProducts = (trades, tradeFlow) => {
    const products = {};
    //adds saved products
    let allTrades = [];
    if (tradeFlow === "exports") {
      allTrades = trades.concat(this.state.exportsToSave);
    }
    if (tradeFlow === "imports") {
      allTrades = trades.concat(this.state.importsToSave);
    }

    allTrades.forEach(trade => {
      if(trade.trade_flow === tradeFlow) {
        if(products[trade.product_id] ) {
          products[trade.product_id].countries.push(trade.Country);
        }
        else {
          if(trade.Country) {
            trade.Country.trade_id = trade.id
          }
          products[trade.product_id] = {
            Product: trade.Product,
            countries: trade.Country ? [trade.Country] : [],
            deleted: trade.deleted || false,
            product_id: trade.product_id,
            trade_flow: trade.trade_flow
          }
        }
      }
    });
    return Object.values(products);
  }

  render() {
    const {trades, loading, error} = this.props;
    if (loading || !trades) {
      return (
        <div className="detailed-content-wrapper">
          <div className="title-wrapper">Product Selection</div>
          <div className="form">
            <div>loading...</div>
          </div>
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
    console.log(imports);
    return (
      <div>
        {this.props.slide === 1
          ? <div>
              <div className="title-wrapper">Product Selection</div>
              <div className="form">
                <b>Products | Import</b>
                <p>Select a maximum of 5 products.</p>
                <ProductSelection tradeFlow={"imports"} addProduct={this.addProduct} deleteProduct={this.deleteTradeByProduct} selectedProducts={imports}/>
                <div className="error-wrapper">{this.state.importError
                    ? <p>{this.state.importError}</p>
                    : null}</div>
                <div className="selected-products-wrapper">
                  {imports.map((product, index) => {
                    if (!product.deleted) {
                      return (
                        <div className="selected-product-wrapper" key={index}>
                          <div>
                            <span>{product.Product.name}</span>
                            <div className="delete" onClick={this.deleteTradeByProduct.bind(this, product, "import")}></div>
                          </div>
                        </div>
                      );
                    }
                  })}</div>
                <b>Products | Exports</b>
                <p>Select a maximum of 5 products.</p>
                <ProductSelection tradeFlow={"exports"} addProduct={this.addProduct} deleteProduct={this.deleteTradeByProduct} selectedProducts={exports}/>
                <div className="error-wrapper">{this.state.exportError
                    ? <p>{this.state.exportError}</p>
                    : null}</div>
                <div className="selected-products-wrapper">
                  {exports.map((product, index) => {
                    if (!product.deleted) {
                      return (
                        <div className="selected-product-wrapper" key={index}>
                          <div>
                            <span>{product.Product.name}</span>
                            <div className="delete" onClick={this.deleteTradeByProduct.bind(this, product, "export")}></div>
                          </div>
                        </div>
                      );
                    }
                  })}</div>
                <div className="button-wrapper">
                  <button className="button button-back" onClick={this.props.previousSlide}>
                    <span className="chevron left"></span>Back</button>
                  <button className="button button-next" onClick={this.props.nextSlide}>Next<span className="chevron right"></span>
                  </button>
                </div>
              </div>
            </div>
          : null}

        {this.props.slide === 2
          ? <div>
              <div className="title-wrapper">Product Selection</div>
              <div className="form">
                {imports.length !== 0
                  ? <div>
                      <b>Imports</b>
                      <p>Select a maximum of 5 countries per product</p>
                    </div>
                  : null}
                {imports.map((product, index) => {
                  if (!this.state.importsToDelete.includes(product.product_id)) {
                    const id = product.product_id.slice(0, 2);
                    return (
                      <div key={index} className="country-selection-wrapper">
                        <div>
                          <div className={`icon-wrapper color-${id}`}>
                            <img src={`/images/product_icon/hs_${id}.png`}></img>
                          </div>
                          <div className="colored-wrapper">
                            <div className={`darker-color color-${id}`}></div>
                            <p className="product">{product.Product.name}</p>
                          </div>
                          <CountrySelection tradeFlow={"import"} createTrade={this.createTrade} deleteTrade={this.deleteTradeByCountry} trade={product}/>
                        </div>
                      </div>
                    );
                  }
                })}
                {exports.length !== 0
                  ? <div>
                      <b>Exports</b>
                      <p>Select a maximum of 5 countries per product</p>
                    </div>
                  : null}
                {exports.map((product, index) => {
                  if (!this.state.exportsToDelete.includes(product.product_id)) {
                    const id = product.product_id.slice(0, 2);
                    return (
                      <div key={index} className="country-selection-wrapper">
                        <div>
                          <div className={`icon-wrapper color-${id}`}>
                            <img src={`/images/product_icon/hs_${id}.png`}></img>
                          </div>
                          <div className="colored-wrapper">
                            <div className={`darker-color color-${id}`}></div>
                            <p className="product">{product.Product.name}</p>
                          </div>
                          <CountrySelection tradeFlow={"export"} createTrade={this.createTrade} deleteTrade={this.deleteTradeByCountry} trade={product}/>
                        </div>
                      </div>
                    );
                  }
                })}
                <div className="button-wrapper">
                  <button className="button button-back" onClick={this.props.previousSlide}>
                    <span className="chevron left"></span>Back</button>
                  <button className="button button-next" onClick={this.props.nextSlide}>Next<span className="chevron right"></span>
                  </button>
                </div>
              </div>
            </div>
          : null}
        {this.props.slide === 3
          ? <div>

              <div className="completed-slide">
                <img src="/images/icons/icon-registration.svg"></img>
                <p>Your company was saved succesfully.</p>
                <Link to={`/company/${this.props.companyId}`}>
                  <div>
                    <button className="button listing-button button-next">See My Listing<span className="chevron right"></span>
                    </button>
                  </div>
                </Link>
              </div>

            </div>
          : null}
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
    },
    deleteTradeByCountry: (companyId, productId, countryId, tradeFlow) => {
      dispatch(deleteTradeByCountry(companyId, productId, countryId, tradeFlow));
    },
    createTrade: (companyId, productId, countryId, tradeFlow) => {
      dispatch(createTrade(companyId, productId, countryId, tradeFlow));
    }
  };
};

const mapStateToProps = state => {
  return {saved: state.trades.saved, trades: state.trades.settingsTrades, tradesLoading: state.trades.loading, tradesError: state.trades.error};
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeSelection);
