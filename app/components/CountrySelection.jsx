import React from "react";
import {connect} from "react-redux";
import {countryInputChange, arrowRenderer, countryValueRenderer, countryOptionRenderer} from "../components/Dropdown";
import {fetchCountries} from "../actions/countriesActions";
import {fetchSettingsTradesByCompany} from "../actions/tradesActions";
import Dropdown from "../components/Dropdown2";
import SelectedCountries from "./SelectedCountries";
import {Link} from "react-router";

class CountrySelection extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchSettingsTradesByCompany(this.props.user.company_id);
  }

  getProducts = (tradeFlow, trades) => {
    const products = {};
    trades.map((trade, index) => {
      if (trade.trade_flow === tradeFlow) {
        if (products[trade.product_id]) {
          if (trade.Country) {
            products[trade.product_id].countries.push(trade.Country);
          }
        } else {
          const product = {
            name: trade.Product.name,
            countries: []
          }
          if (trade.Country !== null) {
            product.countries.push(trade.Country);
          }
          products[trade.product_id] = product;
        }
      }
    });
    return products;
  }

  render() {
    const {trades} = this.props;

    if (!this.props.user.company_id) {
      return (
        <div className="register-company">
          <img src="/images/icons/icon-registration.svg"></img>
          <p>Register a company before adding countries.</p>

          <Link to="/settings/company">
            <button className="button button-next">Register a Company</button>
          </Link>
        </div>
      )
    }

    if (!trades) {
      return <div></div>
    }

    if (trades.length === 0) {
      return (
        <div className="register-company">
          <img src="/images/icons/icon-product-black.svg"></img>
          <p>Select some products before adding countries.</p>
          <Link to="/settings/product">
            <button className=" button button-next">Add Products</button>
          </Link>
        </div>
      )
    }
    const imports = this.getProducts("imports", trades);
    const exports = this.getProducts("exports", trades);
    return (
      <div>
        {Object.keys(imports).length > 0 ?
        <div className="section-wrapper">
          <div>
            <b>Imports</b>
            <p className="description">Select a maximum of 5 countries per product</p>
          </div>
          {Object.keys(imports).map((product, index) => {
            const id = product.slice(0, 2);
            return (
              <div key={index} className="country-selection-wrapper">
                <div className="selection-wrapper">
                  <div className={`icon-wrapper color-${id}`}>
                    <img src={`/images/product_icon/hs_${id}.png`}></img>
                  </div>
                  <div className="colored-wrapper">
                    <div className={`darker-color color-${id}`}></div>
                    <p className="product">{imports[product].name}</p>
                  </div>
                  <div className="country-selection">
                    <SelectedCountries tradeFlow={"imports"} productId={product} companyId={this.props.user.company_id} selectedCountries={imports[product].countries}/>
                  </div>
                </div>
              </div>
            );
          })}</div> : null}
        {Object.keys(exports).length > 0 ? <div className="section-wrapper">
          <div>
            <b>Exports</b>
            <p className="description">Select a maximum of 5 countries per product</p>
          </div>
          {Object.keys(exports).map((product, index) => {
            const id = product.slice(0, 2);
            return (
              <div key={index} className="country-selection-wrapper">
                <div className="selection-wrapper">
                  <div className={`icon-wrapper color-${id}`}>
                    <img src={`/images/product_icon/hs_${id}.png`}></img>
                  </div>
                  <div className="colored-wrapper">
                    <div className={`darker-color color-${id}`}></div>
                    <p className="product">{exports[product].name}</p>
                  </div>
                  <div className="country-selection">
                    <SelectedCountries tradeFlow={"exports"} productId={product} companyId={this.props.user.company_id} selectedCountries={exports[product].countries}/>
                  </div>
                </div>
              </div>
            );
          })}</div> : null }
        <div className="button-wrapper">
          <Link to={`/company/${this.props.user.company_id}`}>
            <div>
              <button className="button listing-button button-next">See My Listing<span className="chevron right"></span>
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSettingsTradesByCompany: id => {
      dispatch(fetchSettingsTradesByCompany(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    company: state.companyProfile.authCompany,
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error || null,
    trades: state.trades.settingsTrades,
    tradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelection);
