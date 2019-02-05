import React from "react";
import {connect} from "react-redux";
import Card from "components/Card.jsx";
import AnchorList from "components/AnchorList.jsx";
import Loading from "components/Loading.jsx";
import {Link} from "react-router";
import {fetchProduct} from "actions/productActions";
import {fetchCountries} from "actions/countriesActions";
import {fetchProducts} from "actions/productsActions";
import {fetchTradesByProduct} from "actions/tradesActions";
import "./Detailed.css";
import ProductHeader from "components/ProductHeader";
import CountryDropdown from "components/CountryDropdown";
import {fetchData} from "@datawheel/canon-core";
import {nest} from "d3-collection";
import {Button, ButtonGroup} from "@blueprintjs/core";

import Helmet from "react-helmet";
import header from "helpers/helmet.js";


class ProductWithId extends React.Component {
  constructor(props) {
    super(props);

    this.countriesWithTrades = [];
    if (props.data.trades) {
      this.countriesWithTrades = nest()
        .key(d => d.country_id)
        .entries(props.data.trades.filter(t => t.country_id))
        .map(c => ({count: new Set(c.values.map(d => d.company_id)).size, ...c.values[0].Country}))
        .sort((a, b) => b.count - a.count);
      // prepend "all" as default selected option
      this.countriesWithTrades.unshift({name: "All", id: "all"});
    }

    this.state = {
      selectedOption: "all",
      country: {name: "All Countries", id: "all"},
      filteredTrades: props.data.trades || [],
      tradeFlow: null
    };
  }

  componentDidMount() {
    const id = this.props.params.productWithId;
    // this.props.fetchCountries();
    // this.props.fetchProducts();
    this.props.fetchTradesByProduct(id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.productWithId !== newProps.params.productWithId) {
      const id = newProps.params.productWithId;
      // this.props.fetchCountries();
      // this.props.fetchProducts();
      this.props.fetchTradesByProduct(id);
    }
  }

  filterTrades = () => {
    const {country, tradeFlow} = this.state;
    const {trades} = this.props.data;
    // const filteredTrades = country.id === "all" ? trades : trades.filter(trade => trade.country_id === country.id);
    const filteredTrades = trades.filter(trade => {
      if (country.id !== "all" && tradeFlow) {
        return trade.country_id === country.id && trade.trade_flow === tradeFlow;
      }
      if (country.id !== "all" && !tradeFlow) {
        return trade.country_id === country.id;
      }
      if (tradeFlow) {
        return trade.trade_flow === tradeFlow;
      }
      return true;
    });

    this.setState({filteredTrades});
  }

  selectDropDown = country => {
    this.setState({country}, this.filterTrades);
  }

  changeTradeFlow = tradeFlow => {
    this.setState({tradeFlow}, this.filterTrades);
  }

  removeSelection = () => {
    this.setState({country: {name: "All", id: "all"}, tradeFlow: null}, this.filterTrades);
  }

  introParagraph = () => {
    const {product, trades} = this.props.data;
    const tradesByCompany = nest()
      .key(d => d.company_id)
      .entries(trades)
      .map(c => c.values[0].Company);
    const exportsByCountry = nest()
      .key(d => d.country_id)
      .entries(trades.filter(t => t.trade_flow === "exports" && t.country_id))
      .map(c => ({count: c.values.length, ...c.values[0].Country}))
      .sort((a, b) => b.count - a.count);
    const importsByCountry = nest()
      .key(d => d.country_id)
      .entries(trades.filter(t => t.trade_flow === "imports" && t.country_id))
      .map(c => ({count: c.values.length, ...c.values[0].Country}))
      .sort((a, b) => b.count - a.count);

    const numCompanies = tradesByCompany.length;
    return numCompanies
      ? <p>
        {numCompanies === 1
          ? <span>There is one company trading {product.name} named <AnchorList items={tradesByCompany.slice(0, 3)} name={c => c.name} url={c => `/company/${c.slug}`} />.&nbsp;</span>
          : <span>There are {tradesByCompany.length} companies trading {product.name} including <AnchorList items={tradesByCompany.slice(0, 3)} name={c => c.name} url={c => `/company/${c.slug}`} />.&nbsp;</span>}
        {exportsByCountry.length
          ? exportsByCountry.length === 1
            ? <span>{numCompanies === 1 ? <span>This company exports them from</span> : <span>These companies export them from</span>} <AnchorList items={exportsByCountry.slice(0, 3)} name={c => c.name} url={c => `/country/${c.id}`} />.&nbsp;</span>
            : <span>{numCompanies === 1 ? <span>This company exports them from {exportsByCountry.length} different countries</span> : <span>These companies export them from {exportsByCountry.length} different countries</span>} including <AnchorList items={exportsByCountry.slice(0, 3)} name={c => c.name} url={c => `/country/${c.id}`} />.&nbsp;</span>
          : null}
        {importsByCountry.length
          ? importsByCountry.length === 1
            ? <span>They import them from one country, <AnchorList items={importsByCountry.slice(0, 3)} name={c => c.name} url={c => `/country/${c.id}`} />.&nbsp;</span>
            : <span>They import them from {importsByCountry.length} different countries including <AnchorList items={importsByCountry.slice(0, 3)} name={c => c.name} url={c => `/country/${c.id}`} />.&nbsp;</span>
          : null}
      </p>
      : null;
  }

  render() {
    const {error, countriesError, countries, products, data} = this.props;
    const {country, filteredTrades, tradeFlow} = this.state;
    const {product, productData} = data;

    if (error || countriesError) {
      return (
        <div className="blue-loading">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    if (!product || product.error) {
      return (
        <div className="error-404">
          <div className="error-gif"></div>
          <p>OOPS! There's nothing here. But checkout the following pages that are here:</p>
        </div>
      );
    }

    let productCategory = "";
    if (products) {
      products.map(product => {
        if (product.key === this.props.params.productWithId.slice(0, 2)) {
          productCategory = product.name;
        }
      });
    }

    const companies = nest()
      .key(d => d.company_id)
      .entries(filteredTrades)
      .map(c => ({countries: [...new Set(c.values.map(d => d.country_id))], ...c.values[0]}))
      .sort((a, b) => b.count - a.count);

    return (
      <div className="detailed-content-wrapper product">
        <Helmet title={ `${ header.title } - ${ product.name }` } />
        <ProductHeader countries={countries} productData= {productData} product={product} productCategory={productCategory}/>

        <div className="filter-bg">
          <div className="filter-wrapper">

            <div className="filter">
              <div className="label trade-flow-label">
                <p>Trade Flow</p>
              </div>
              <br />
              <ButtonGroup className="bp3-dark">
                <Button onClick={() => this.changeTradeFlow(null)} active={tradeFlow ? false : true} icon="arrows-horizontal">All</Button>
                <Button onClick={() => this.changeTradeFlow("exports")} active={tradeFlow === "exports" ? true : false} icon="arrow-right">Export</Button>
                <Button onClick={() => this.changeTradeFlow("imports")} active={tradeFlow === "imports" ? true : false} icon="arrow-left">Import</Button>
              </ButtonGroup>
            </div>

            <div className="filter">
              <div className="label country-dropdown-label">
                <p>Country</p>
              </div>
              <CountryDropdown data={this.countriesWithTrades} handleSelection={this.selectDropDown} selectedItem={country} />
            </div>

            {/* <div className="filter button-wrapper">
              <ButtonGroup className="bp3-dark">
                <Button className="bp3-dark" onClick={this.removeSelection} icon="ban-circle">Clear All Filters</Button>
              </ButtonGroup>
            </div> */}

          </div>
        </div>

        <div className="intro-text">
          <section>
            {this.introParagraph()}
          </section>
        </div>

        <div>
          <div className="result-wrapper-outer">
            {companies.length
              ? <div className="result-wrapper">
                {companies.map(trade => <Card key={trade.id} countries={trade.countries} content={{profile_type: "company", ...trade.Company}} />)}
              </div>
              : <div className="result-wrapper no-companies">
                <p>There are no companies listed. Be the first one!</p>
                <Link to={"/settings"}>
                  <button className="list-company">List Your Company</button>
                </Link>
              </div>}
          </div>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => {
    dispatch(fetchProduct(id));
  },
  fetchCountries: () => {
    dispatch(fetchCountries());
  },
  fetchTradesByProduct: id => {
    dispatch(fetchTradesByProduct(id));
  },
  fetchProducts: () => {
    dispatch(fetchProducts());
  }
});

ProductWithId.preneed = [
  fetchData("product", "/api/products/<productWithId>", res => res),
  fetchData("trades", "/api/trades/product/<productWithId>", res => res)
];

ProductWithId.need = [
  fetchData("productData", "https://atlas.media.mit.edu/hs92/import/2015/all/all/<product.id_hs92>/", res => res.data[0])
];

const mapStateToProps = state => ({
  data: state.data,
  product: state.productProfile.product,
  loading: state.productProfile.loading,
  error: state.productProfile.error,
  countries: state.countries.countries,
  countriesLoading: state.countries.loading,
  countriesError: state.countries.error,
  trades: state.trades.trades,
  tradesLoading: state.trades.loading,
  tradesError: state.trades.error,
  products: state.products.products,
  productsLoading: state.products.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductWithId);
