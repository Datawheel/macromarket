import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCountries} from "../actions/countriesActions";
import {CountrySelection} from "./CountrySelection.jsx";

class CountrySelectionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCountries();
  }

  addTrade = (country, product) => {
    console.log(country, "country");
    console.log(product, "Product");
    const trade = {country_id: country.id, product_id: product.id};
    this.props.addTrade(trade);
  }

  render() {
    const {countries, loading, error} = this.props;
    if (loading || !countries) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      )
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      )
    }
    const products = {};
    this.props.products.map(trade => {
      if(!products[trade.Product.id]) {
        products[trade.Product.id] = {product: trade.Product, countries: [trade.Country]}
      }
      else {
        products[trade.Product.id].countries.push(trade.Country);
      }
    })

    return (
      <div>
        {Object.keys(products).map(product => {
          return <CountrySelection addTrade={this.addTrade} savedCountries={products[product].countries} countries={this.props.countries} trade={products[product].product}/>
        })}
        <button onClick={this.props.createTrades}>Save</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: () => {
      dispatch(fetchCountries());
    }
  };
};

const mapStateToProps = state => {
  return {
    countries: state.countries.countries,
    loading: state.countries.loading,
    error: state.countries.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountrySelectionForm);
