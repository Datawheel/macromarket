import React from "react";
import {connect} from "react-redux";
import {Link, browserHistory} from "react-router";
import {fetchData} from "datawheel-canon";
import api, {url} from "../../api";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import "./Admin.css";
import "./Settings.css";
import TradeEdit from "./TradeEdit";
import {fetchUnNestedProducts} from "../../actions/productsActions";
import {fetchUnNestedCountries} from "../../actions/countriesActions";

class EditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      newProduct: false,
      unsavedTrades: false
    };
  }

  componentDidMount() {
    this.props.fetchCountries();
    this.props.fetchProducts();
    if (!this.props.isOverlay) {
      const {companySlug} = this.props.params;
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
    const {newProduct, trades, unsavedTrades} = this.state;
    const {company} = this.props;
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
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({message: "Product trades updated.", intent: Intent.SUCCESS});
      this.setState({unsavedTrades: false});
      browserHistory.push("/settings/");
    });
  }

  addProduct = product => {
    const trades = this.state.trades.filter(t => t.product);
    if (trades.length >= 10) {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
      toast.show({
        timeout: 10000,
        message: "Max products exceeded. You may only list your company on 10 product pages.",
        intent: Intent.DANGER
      });
    }
    else if (trades.filter(t => t.product.id === product.id).length > 0) {
      const toast = Toaster.create({className: "company-saved-toast", position: Position.TOP_CENTER});
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
    const {company} = this.props;
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
        <div className="pt-form-group">
          <p>...or browse and select from the list</p>
          <ProductBrowse products={products} selectProduct={this.addProduct} />
        </div>
        */}

        { trades.length
          ? <table className="pt-table pt-bordered trades">
            <thead>
              <tr>
                <th>Product</th>
                <th>Export Destinations</th>
                <th>Import Origins</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, i) =>
                <TradeEdit
                  key={i}
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
          <button type="button" className={newProduct ? "pt-button pt-large pt-disabled" : "pt-button pt-large"} onClick={this.appendProductRow}>
            <span className="pt-icon-standard pt-icon-plus pt-align-left"></span>
            Add product
          </button>
          {/* <ProductPicker isOpen={isOpen} toggleProductMenu={this.toggleProductMenu} /> */}
        </div>
        <hr />
        <div className="button-group">
          <Link role="button" className="pt-button pt-large" to="/settings">
            Cancel
            <span className="pt-icon-standard pt-icon-disable pt-align-right"></span>
          </Link>
          <button type="button" className={unsavedTrades && !newProduct ? "pt-button pt-intent-success pt-large" : "pt-button pt-intent-success pt-large pt-disabled"} onClick={this.saveTrades}>
            Save
            <span className="pt-icon-standard pt-icon-tick pt-align-right"></span>
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => {
    dispatch(fetchUnNestedProducts());
  },
  fetchCountries: () => {
    dispatch(fetchUnNestedCountries());
  }
});

const mapStateToProps = state => ({
  company: state.data.company,
  countries: state.countries.countries,
  products: state.products.products,
  auth: state.auth,
  isOverlay: state.onboarding.isOverlayOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProducts);
