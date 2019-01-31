import React from "react";
import {connect} from "react-redux";
import api, {url} from "helpers/api";
import {Intent} from "@blueprintjs/core";
import "./Admin.css";
import "./Settings.css";
import TradeEdit from "pages/admin/TradeEdit";
import {fetchUnNestedProducts} from "actions/productsActions";
import {fetchCountries} from "actions/countriesActions";
import {updateSlideOverlay} from "actions/onboardingActions";
import PropTypes from "prop-types";

class EditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      newProduct: false,
      unsavedTrades: false
    };
  }

  getCompany = () => {
    const {isOverlay, company, onboardingCompany} = this.props;
    return isOverlay ? onboardingCompany : company;
  };

  componentDidMount() {
    this.props.fetchCountries();
    this.props.fetchProducts();
    const {companySlug} = this.props.isOverlay ? this.props : this.props.params;
    if (companySlug) {
      api.get(`/api/trades/company/${companySlug}`).then(res => {
        const trades = [];
        res.data.forEach(t => {
          const prodRow = trades.find(tt => tt.product.id === t.product_id);
          const tKey = t.trade_flow === "imports" ? "origins" : "destinations";
          const tOtherKey = t.trade_flow === "imports" ? "destinations" : "origins";
          const country = t.Country ? [t.Country] : [];
          if (prodRow && country) {
            prodRow[tKey] = prodRow[tKey].concat(country);
          }
          else {
            trades.push({product: t.Product, [tKey]: country, [tOtherKey]: []});
          }
        });
        if (this.props.onboardingProduct) {
          trades.push({product: this.props.onboardingProduct, origins: [], destinations: []});
        }
        this.setState({trades});
      });
    }
  }

  handleChange = e => {
    const value = e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  saveTrades = () => {
    const {router} = this.props;
    const {newProduct, trades, unsavedTrades} = this.state;
    const company = this.getCompany();
    const tradesForServer = [];
    if (!unsavedTrades || newProduct) {
      return;
    }
    trades.forEach(t => {
      if (!t.origins.length && !t.destinations.length) {
        tradesForServer.push({product: t.product, tradeFlow: "exports", country: null});
      }
      t.origins.forEach(o => {
        tradesForServer.push({product: t.product, tradeFlow: "imports", country: o});
      });
      t.destinations.forEach(d => {
        tradesForServer.push({product: t.product, tradeFlow: "exports", country: d});
      });
    });

    api.post(`/api/trades/company/${company.id}`, tradesForServer).then(() => {
      const toast = this.context.toast.current;
      toast.show({message: "Product trades updated.", intent: Intent.SUCCESS});
      this.setState({unsavedTrades: false});
      if (this.props.isOverlay) {
        this.props.updateSlideOverlay(3);
      }
      else {
        router.push("/settings/");
      }
    });
  };

  cancel = () => {
    const {router} = this.props;
    if (this.props.isOverlay) {
      this.props.updateSlideOverlay(1);
    }
    else {
      router.push("/settings/");
    }
  };

  addProduct = product => {
    const trades = this.state.trades.filter(t => t.product);
    if (trades.length >= 10) {
      const toast = this.context.toast.current;
      toast.show({
        timeout: 10000,
        message: "Max products exceeded. You may only list your company on 10 product pages.",
        intent: Intent.DANGER
      });
    }
    else if (trades.filter(t => t.product.id === product.id).length > 0) {
      const toast = this.context.toast.current;
      toast.show({
        timeout: 10000,
        message: "This product is already listed.",
        intent: Intent.DANGER
      });
    }
    else {
      const trade = {
        product,
        origins: [],
        destinations: []
      };
      this.setState({newProduct: false, trades: trades.concat([trade])});
    }
  }

  addOrigins = (origins, productId) => {
    const {trades} = this.state;
    const newTrades = trades.map(t => {
      if (t.product.id === productId) {
        t.origins = origins;
      }
      return t;
    });
    this.setState({trades: newTrades, unsavedTrades: true});
  }

  addDestinations = (destinations, productId) => {
    const {trades} = this.state;
    const newTrades = trades.map(t => {
      if (t.product.id === productId) {
        t.destinations = destinations;
      }
      return t;
    });
    this.setState({trades: newTrades, unsavedTrades: true});
  }

  deleteProduct = p => {
    const company = this.getCompany();
    const {trades} = this.state;

    api.delete(`/api/trades/company/${company.id}/product/${p.id}`).then(() => {
      this.setState({
        trades: trades.filter(t => t.product.id !== p.id)
      });
    });
  }

  toggleProductMenu = isOpen => this.setState({isOpen});

  appendProductRow = () => {
    if (!this.state.newProduct) {
      this.setState({
        unsavedTrades: true,
        newProduct: true,
        trades: this.state.trades.concat([{product: null, origins: [], destinations: []}])
      });
    }
  }

  render() {
    const {auth, products, countries} = this.props;
    const {newProduct, trades, unsavedTrades} = this.state;
    return (
      <div>

        {/*
        <div className="bp3-form-group">
          <p>...or browse and select from the list</p>
          <ProductBrowse products={products} selectProduct={this.addProduct} />
        </div>
        */}

        { trades.length
          ? <table className="bp3-html-table bp3-html-table-bordered trades">
            <thead>
              <tr>
                <th>Product</th>
                <th>Export Destinations</th>
                <th>Import Origins</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {trades.map(trade =>
                <TradeEdit
                  key={trade.id}
                  trade={trade}
                  countries={countries}
                  selectProduct={this.addProduct}
                  selectDestinations={this.addDestinations}
                  selectOrigins={this.addOrigins}
                  deleteProduct={this.deleteProduct}
                />
              )}
            </tbody>
          </table>
          : null
        }

        <div>
          <button type="button" className={newProduct ? "bp3-button bp3-large bp3-disabled" : "bp3-button bp3-large"} onClick={this.appendProductRow}>
            <span className="bp3-icon-standard bp3-icon-plus bp3-align-left"></span>
            Add product
          </button>
          {/* <ProductPicker isOpen={isOpen} toggleProductMenu={this.toggleProductMenu} /> */}
        </div>
        <hr />
        <div className="button-group">
          <button type="button" className="bp3-button bp3-large" onClick={this.cancel}>
            Cancel
            <span className="bp3-icon-standard bp3-icon-disable bp3-align-right"></span>
          </button>
          <button type="button" className={unsavedTrades && !newProduct ? "bp3-button bp3-intent-success bp3-large" : "bp3-button bp3-intent-success bp3-large bp3-disabled"} onClick={this.saveTrades}>
            Save
            <span className="bp3-icon-standard bp3-icon-tick bp3-align-right"></span>
          </button>
        </div>
      </div>
    );
  }
}

EditProducts.contextTypes = {
  toast: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(fetchUnNestedProducts());
  },
  fetchCountries: () => {
    dispatch(fetchCountries());
  },
  updateSlideOverlay: slideNumber => {
    dispatch(updateSlideOverlay(slideNumber));
  }
});

const mapStateToProps = state => ({
  company: state.data.company,
  countries: state.countries.unnestedCountries,
  products: state.products.products,
  auth: state.auth,
  isOverlay: state.onboarding.isOverlayOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts);
