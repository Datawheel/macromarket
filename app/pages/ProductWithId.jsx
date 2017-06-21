import React from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import Sidebar from "../components/Sidebar.jsx";
import {browserHistory} from "react-router";
import {Card} from "../components/Card.jsx";
import {fetchProduct} from "../actions/productActions";
import {fetchCountries} from "../actions/countriesActions";
import {fetchProducts} from "../actions/productsActions";
import {fetchTradesByProduct} from "../actions/tradesActions";
import "./Detailed.css";
import "../components/Dropdown.css";
// import {countryInputChange, arrowRenderer,countryValueRenderer, countryOptionRenderer} from "../components/Dropdown";

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
    this.props.fetchProduct(id);
    this.props.fetchCountries();
    this.props.fetchProducts();
    this.props.fetchTradesByProduct(id);
  }

    componentWillReceiveProps(newProps) {
    if (this.props.params.productWithId !== newProps.params.productWithId) {
      const id = newProps.params.productWithId;
      this.props.fetchProduct(id);
      this.props.fetchCountries();
      this.props.fetchProducts();
      this.props.fetchTradesByProduct(id);
    }
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  selectDropDown = country => {
    this.setState({country});
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
    countries.map(continent => {
      let first = true;
      continent.values.map(country => {
        dropDownCountries.push({continent:continent.key, value: country.id, label: country.name, first});
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

    const fallbackId = product.id.substring(0, 2);
    const img = product.flickr_link
      ? `/images/product/${product.id}.jpg`
      : product.parent_image
        ? `/images/product/${product.id.slice(0, -2)}.jpg`
        : `/images/product/${fallbackId}.jpg`;

    return (
      <div className="detailed-content-wrapper product">
        <div className="header">
          <Sidebar>
            <div className="profile-info">
              <div className="header-wrapper">
                <h2>
                  <span><img src={"/images/icons/icon-product-white.svg"}/></span>{product.name}</h2>
                <div className="yellow-line"></div>
                <p className="product-category">{productCategory}</p>
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
            
          </div>
        </div>
        <div>
          <div className="result-wrapper-outer">
            {trades
              ? <div className="result-wrapper">
                  {trades.map((trade, index) => {
                    const content = trade.Company;
                    content.profile_type = "company";
                    if ((trade.trade_flow === `${this.state.selectedOption}s` || this.state.selectedOption === "all") && (this.state.country.value === "all" || this.state.country.value === trade.country_id)) {
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
