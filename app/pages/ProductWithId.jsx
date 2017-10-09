import React from "react";
import {connect} from "react-redux";
import Select from "react-select";
import {browserHistory} from "react-router";
import Card from "../components/Card.jsx";
import AnchorList from "../components/AnchorList.jsx";
import {Link} from "react-router";
import {fetchProduct} from "../actions/productActions";
import {fetchCountries} from "../actions/countriesActions";
import {fetchProducts} from "../actions/productsActions";
import {fetchTradesByProduct} from "../actions/tradesActions";
import "./Detailed.css";
import "../components/Dropdown.css";
import ProductHeader from "../components/ProductHeader";
import Dropdown from "../components/Dropdown";
import {fetchData} from "datawheel-canon";
import {url} from "../api";
import {nest} from "d3-collection";

class ProductWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "all",
      country: {
        label: "All",
        value: "all"
      }
    };
  }

  componentDidMount() {
    const id = this.props.params.productWithId;
    this.props.fetchCountries();
    this.props.fetchProducts();
    this.props.fetchTradesByProduct(id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.productWithId !== newProps.params.productWithId) {
      const id = newProps.params.productWithId;
      this.props.fetchCountries();
      this.props.fetchProducts();
      this.props.fetchTradesByProduct(id);
    }
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  filterCompanies(trades) {
    const seen = [];
    const filteredResult = [];
    for (let i = 0; i < trades.length; i++) {
      const trade = trades[i];
      const unique = !seen.includes(trade.company_id);
      const tradeFlow = this.state.selectedOption === "all" || trade.trade_flow === `${this.state.selectedOption}s`;
      const country = this.state.country.value === "all" || this.state.country.value === trade.country_id;
      if (tradeFlow && country && unique) {
        seen.push(trade.company_id);
        trade.countries = trade.country_id ? [trade.country_id] : [];
        filteredResult.push(trade);
      }
      else {
        filteredResult.map(t => {
          if (t.company_id === trade.company_id && trade.country_id) {
            t.countries.push(trade.country_id);
          }
        });
      }
    }
    return filteredResult;
  }

  selectDropDown = country => {
    this.setState({country});
  }

  removeSelection = () => {
    this.setState({
      country: {
        label: "All",
        value: "all"
      },
      selectedOption: "all"
    });
  }

  compare(a, b, attr) {
    if (a[attr] < b[attr]) {
      return -1;
    }
    if (a[attr] > b[attr]) {
      return 1;
    }
    return 0;
  }

  introParagraph = () => {
    const {product, trades} = this.props.data;
    const tradesByCompany = nest()
      .key(d => d.company_id)
      .entries(trades)
      .map(c => c.values[0].Company);
    const exportsByCountry = nest()
      .key(d => d.product_id)
      .entries(trades.filter(t => t.trade_flow === "exports"))
      .map(c => c.values[0].Country);
    const importsByCountry = nest()
      .key(d => d.product_id)
      .entries(trades.filter(t => t.trade_flow === "imports"))
      .map(c => c.values[0].Country);
    // These companies export {exportsByProduct.length} products including <AnchorList items={exportsByProduct.slice(0, 3)} name={c => c.name} url={c => `/product/${c.id}`} />.
    // They import {importsByProduct.length} products including <AnchorList items={importsByProduct.slice(0, 3)} name={c => c.name} url={c => `/product/${c.id}`} />.
    return tradesByCompany.length
      ? <p>
        There are {tradesByCompany.length} companies trading {product.name} including <AnchorList items={tradesByCompany.slice(0, 3)} name={c => c.name} url={c => `/company/${c.slug}`} />.
        These companies export them from {exportsByCountry.length} different countries including <AnchorList items={exportsByCountry.slice(0, 3)} name={c => c.name} url={c => `/country/${c.id}`} />.
        They import them from {importsByCountry.length} different countries including <AnchorList items={importsByCountry.slice(0, 3)} name={c => c.name} url={c => `/country/${c.id}`} />.
      </p>
      : null;
  }

  render() {
    const {loading, error, countriesLoading, countriesError, countries, trades, products, data} = this.props;
    const {product, productData} = data;

    if (loading || !product || !countries || !trades || !products) {
      return (
        <div className="blue-loading">
          <div>loading...</div>
        </div>
      );
    }

    if (error || countriesError) {
      return (
        <div className="blue-loading">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    const dropDownCountries = [];
    countries.sort((a, b) => this.compare(a, b, "key"));
    countries.map(continent => {
      let first = true;
      continent.values.sort((a, b) => this.compare(a, b, "name"));
      continent.values.map(country => {
        dropDownCountries.push({continent: continent.key, value: country.id, label: country.name, first});
        first = false;
      });
    });



    let productCategory = "";
    if (products) {
      products.map(product => {
        if (product.key === this.props.params.productWithId.slice(0, 2)) {
          productCategory = product.name;
        }
      });
    }

    return (
      <div className="detailed-content-wrapper product">
        <ProductHeader countries={countries} productData= {productData} product={product} productCategory={productCategory}/>
        <div className="filter-wrapper">
          <div className="filter export-import">
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "export")} type="radio" value="export" checked={this.state.selectedOption === "export"}/>
              <p>export</p>
            </label>
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "import")} type="radio" value="import" checked={this.state.selectedOption === "import"}/>
              <p>import</p>
            </label>
          </div>
          <div className="filter">
            <div className="label country-dropdown-label">
              <p>Country</p>
            </div>
            <Dropdown type="countries" select={this.selectDropDown} value={this.state.country.value} options={dropDownCountries}></Dropdown>
          </div>
          <div className="filter button-wrapper">
            <button className="clear-filters" onClick={this.removeSelection.bind(this)}>
              <span><img src="/images/icons/icon-clear-white.svg"/></span>
              Clear All Filters
            </button>
          </div>
        </div>

        <div className="intro-text">
          <section>
            {this.introParagraph()}
          </section>
        </div>

        <div>
          <div className="result-wrapper-outer">
            {trades
              ? <div className="result-wrapper">
                {this.filterCompanies(trades).length > 0 ? this.filterCompanies(trades).map((trade, index) => {
                  const content = trade.Company;
                  content.profile_type = "company";
                  if ((trade.trade_flow === `${this.state.selectedOption}s` || this.state.selectedOption === "all") && (this.state.country.value === "all" || this.state.country.value === trade.country_id)) {
                    return <Card key={index} countries={trade.countries} content={content}/>;
                  }
                  else {
                    return null;
                  }
                }) : <div className="result-wrapper no-companies">
                  <p>There are no companies listed. Be the first one!</p>
                  <Link to={"/settings/product"}>
                    <button className="list-company">List Your Company</button>
                  </Link>
                </div>}
              </div>
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => {
      dispatch(fetchProduct(id))
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
  };
};

ProductWithId.preneed = [
  fetchData("product", `${url}/api/products/<productWithId>`, res => res),
  fetchData("trades", `${url}/api/trades/product/<productWithId>`, res => res)
];

ProductWithId.need = [
  fetchData("productData", "http://atlas.media.mit.edu/hs92/import/2015/all/all/<product.id_hs92>/", res => res.data[0])
];
ProductWithId.postneed = [];

const mapStateToProps = state => {
  return {
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductWithId);
