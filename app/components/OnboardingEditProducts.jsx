import React from "react";
import {connect} from "react-redux";
import api from "../api";
import {Intent, Position, Toaster} from "@blueprintjs/core";
import "../pages/admin/Admin.css";
import "../pages/admin/Settings.css";
import "./OnboardingEditProducts.css";
import TradeEdit from "./OnboardingTradeEdit";
import {fetchUnNestedProducts} from "../actions/productsActions";
import {fetchCountries} from "../actions/countriesActions";
import {updateSlideOverlay} from "../actions/onboardingActions";
import PropTypes from "prop-types";

class EditProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trades: [],
      newProduct: false,
      unsavedTrades: false,
      isSaving: false
    };
  }

  getCompany = () => {
    const {isOverlay, company, onboardingCompany} = this.props;
    return isOverlay ? onboardingCompany : company;
  };

  componentDidMount() {
    this.props.fetchProducts();
    const {companySlug} = this.props.isOverlay ? this.props : {companySlug: null};
    const trades = [];
    if (companySlug && !this.props.isOverlay) {
      api.get(`/api/trades/company/${companySlug}`).then(res => {
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
      });
    }
    if (this.props.onboardingProduct) {
      trades.push({product: this.props.onboardingProduct, origins: [], destinations: []});
    }
    this.setState({trades});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.companySlug !== this.props.companySlug || nextProps.onboardingProduct !== this.props.onboardingProduct) {
      this.props.fetchCountries();
      this.props.fetchProducts();
      const trades = [];
      if (nextProps.onboardingProduct) {
        trades.push({product: nextProps.onboardingProduct, origins: [], destinations: []});
      }
      this.setState({unsavedTrades: true, trades});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.isSaving;
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
    const {router} = this.context;
    this.setState({isSaving: true});
    const {newProduct, trades, unsavedTrades} = this.state;
    const company = this.getCompany();
    const tradesForServer = [];

    api.get(`/api/trades/company/${company.slug}`).then(res => {
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
      if (!unsavedTrades || newProduct) {
        this.props.updateSlideOverlay(3);
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
        if (this.props.isOverlay) {
          this.props.updateSlideOverlay(3);
        }
        else {
          router.push("/settings/");
        }
      });

    });


  };

  cancel = () => {
    const {router} = this.context;
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
    const {auth, products, countries, onboardingCompany} = this.props;
    const {newProduct, trades, unsavedTrades} = this.state;

    return (
      <div className="slide-inner onboarding-edit-products">

        {/*
        <div className="pt-form-group">
          <p>...or browse and select from the list</p>
          <ProductBrowse products={products} selectProduct={this.addProduct} />
        </div>
        */}

        { trades.length
          ? <div className="onboarding-edit-products-table-container">
            <table className="onboarding-edit-products-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>EXPORT DESTINATIONS</th>
                  <th>IMPORT ORIGINS</th>
                  <th className="small-table-column">&nbsp;</th>
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
          </div>
          : null
        }

        <div className="picker-wrapper">
          <button type="button" className={newProduct ? "add-product-button add-product-button-disabled" : "add-product-button"} onClick={this.appendProductRow}>
            <span className="pt-icon-standard pt-icon-plus pt-align-left"></span>
            Add product
          </button>
          {/* <ProductPicker isOpen={isOpen} toggleProductMenu={this.toggleProductMenu} /> */}
        </div>
        <hr />
        <div className="button-group">
          <button type="button" className="onboarding-button button-right" onClick={this.saveTrades}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

EditProducts.contextTypes = {
  router: PropTypes.object
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
