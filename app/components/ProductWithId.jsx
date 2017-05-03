import React from "react";
import CountryDropdown from "./CountryDropdown.jsx";
import {connect} from "react-redux";
import Sidebar from "./Sidebar.jsx";
import {browserHistory} from "react-router";
import {Card} from "./Card.jsx";
import {fetchProduct} from "../actions/productActions";
import {fetchCountries} from "../actions/countriesActions";
import {fetchProducts} from "../actions/productsActions";
import productWhite from "../img/icons/icon-product-white.svg";
import {fetchTradesByProduct} from "../actions/tradesActions";

class ProductWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrade: "export",
      selectedCountry: {
        id: "all",
        name: "all"
      },
      tradeFilter: "export",
      countryFilter: {
        id: "all",
        name: "all"
      }
    };

    // determines if component needs to fetch new data for random product
    this.shouldUpdate = false;
    browserHistory.listen(location => {
      this.shouldUpdate = true;
    });
  }

  componentDidMount() {
    const id = this.props.params.productWithId;
    this.props.fetchProduct(id);
    this.props.fetchCountries();
    this.props.fetchProducts();
    this.props.fetchTradesByProduct(id);
  }

  componentDidUpdate() {
    if (this.shouldUpdate) {
      const id = this.props.params.productWithId;
      this.props.fetchProduct(id);
      this.props.fetchCountries();
      this.props.fetchProducts();
      this.props.fetchTradesByProduct(id);
      this.shouldUpdate = false;
    }
  }

  handleOptionChange = selectedTrade => {
    this.setState({selectedTrade});
  }

  selectCountry = country => {
    const selected = {
      id: country.id,
      name: country.name
    };
    this.setState({selectedCountry: selected});
  }

  setFilters = () => {
    this.setState({countryFilter: this.state.selectedCountry, tradeFilter: this.state.selectedTrade});
  }

  render() {
    const {
      product,
      loading,
      error,
      countriesLoading,
      countriesError,
      countries,
      trades,
      products
    } = this.props;

    if (loading || !product || countriesLoading || !trades || !products) {
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

    let productCategory = "";

    if(products) {
      products.map(product => {
        if (product.key === this.props.params.productWithId.slice(0, 2)) {
          productCategory = product.name;
        }
      });
    }

    const fallbackId = product.id.substring(0, 2);
    const img = product.flickr_link
      ? `/img/product/${product.id}.jpg`
      : product.parent_image
        ? `/img/product/${product.id.slice(0, -2)}.jpg`
        : `/img/product/${fallbackId}.jpg`;

    return (
      <div className="detailed-content-wrapper product">
        <div className="header">
          <Sidebar>
            <div className="profile-info">
              <div className="header-wrapper">
                <h2>
                  <span><img src={productWhite}/></span>{product.name}</h2>
                <div className="yellow-line"></div> <p className="product-category">{productCategory}</p>
              </div>
              <p>{product.description}</p>
            </div>
          </Sidebar>
          <div className="center-content">
            <div className="header-image-wrapper">
              <div className="background-image" style={{
                backgroundImage: `url(${img})`
              }}></div>
            </div>
          </div>
        </div>
        <div className="filter-wrapper">
          <div className="filter">
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "export")} type="radio" value="export" checked={this.state.selectedTrade === "export"}/>
              <p>export</p>
            </label>
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "import")} type="radio" value="import" checked={this.state.selectedTrade === "import"}/>
              <p>import</p>
            </label>
          </div>
          <div className="filter">
            <div className="label country-dropdown-label">
              <p>Country</p>
            </div>
            <CountryDropdown select={this.selectCountry} selected={this.state.selectedCountry.name} items={countries}/>
          </div>
          <button onClick={this.setFilters} className="go">Go</button>
        </div>
        <div>
          <div className="result-wrapper-outer">
            <h2>{`Companies that ${this.state.tradeFilter} ${this.props.product.name} ${this.state.countryFilter.name === "all"
                ? ""
                : `from ${this.state.countryFilter.name}`}`}</h2>

            {trades
              ? <div className="result-wrapper">
                  {trades.map((trade, index) => {
                    const content = trade.Company;
                    content.profile_type = "company";
                    if (trade.trade_flow === `${this.state.tradeFilter}s` && (this.state.countryFilter.name === "all" || this.state.countryFilter.id === trade.country_id)) {
                      return <Card key={index} content={content}/>;
                    } else {
                      return null;
                    }
                  })}
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

const mapStateToProps = state => {
  return {
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
