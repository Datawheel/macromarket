import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {Card} from "./Card.jsx";
import {browserHistory} from "react-router";
import {connect} from "react-redux";
import {ProductDropdown} from "./CountryDropdown.jsx";
import {fetchCountry} from '../actions/countryActions';
import {fetchProducts} from "../actions/productsActions";
import {fetchTradesByCountry} from "../actions/tradesActions";
import companyGrey from "../img/icons/icon-company-grey.svg";
import productGrey from "../img/icons/icon-product-grey.svg";

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "exports",
      product: {
        id: "all",
        name: "all"
      },
      companyFilter: null
    };

    // determines if component needs to fetch new data for random country
    this.shouldUpdate = false;
    browserHistory.listen(location => {
      this.shouldUpdate = true;
    });
  }

  componentDidMount() {
    const id = this.props.params.countryWithId;
    this.props.fetchCountry(id);
    this.props.fetchProducts();
    this.props.fetchTradesByCountry(id);
  }

  componentWillUpdate() {
    if (this.shouldUpdate) {
      const id = this.props.params.countryWithId
      this.props.fetchCountry(id);
      this.props.fetchProducts();
      this.props.fetchTradesByCountry(id);
      this.shouldUpdate = false;
    }
  }

  selectProduct = filter => {
    this.setState({productFilter: filter})
  }

  selectCompany = filter => {
    this.setState({companyFilter: filter})
  }

  selectProduct = product => {
    const selected = {
      id: product.id,
      name: product.name
    };
    this.setState({product: selected});
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  render() {
    const {country, loading, error, products, trades} = this.props;
    if (loading || !country || !products || !trades) {
      return (
        <div className="blue-loading">
          <div>loading...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="blue-loading">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }
    const continentId = country.id.substring(0, 2);
    const placeImg = country.flickr_link
      ? `/img/country/${country.id}.jpg`
      : `/img/country/${continentId}.jpg`;
    return (
      <div className="detailed-content-wrapper country">
        <div className="header-image-wrapper">
          <div className="background-image" style={{
            backgroundImage: `url(${placeImg})`
          }}></div>
          <div className="image-overlay-wrapper">
            <div className="image-overlay"></div>
            <div className="text-wrapper">
              <div className="section-wrapper">
                <h2>{country.name}</h2>
                <h4>{country.continent}</h4>
                <img className="flag" src={`/img/flags/country_${country.id}.png`}></img>
              </div>
              <div className="section-wrapper continent-wrapper">
                <img src={`/img/flags/country_${continentId}.png`}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-wrapper">
          <div className="filter">
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "exports")} type="radio" value="exports" checked={this.state.selectedOption === "exports"}/>
              <p>Exports</p>
            </label>
            <label className="label radio-label">
              <input className="radio" onChange={this.handleOptionChange.bind(this, "imports")} type="radio" value="imports" checked={this.state.selectedOption === "imports"}/>
              <p>Imports</p>
            </label>
          </div>
          <div className="filter">
            <div className="label">
              <span><img src={productGrey}/></span>
              <p>Filter Products</p>
            </div>
            <ProductDropdown select={this.selectProduct} selected={this.state.product.name} items={products}/>
          </div>
          <button className="go">Go</button>
        </div>
          <div className="result-wrapper-outer">
        <div className="result-wrapper">
          {trades
            ? trades.map((trade, index) => {
              const content = trade.Company;
              content.profile_type = "company";
              const parentId = trade.product_id.slice(0, 2);
              if (trade.trade_flow === this.state.selectedOption && (this.state.product.name === "all" || this.state.product.id === parentId)) {
                return <Card key={index} content={content}/>;
              }
              else {
                return null;
              }
            })
            : null}
        </div></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: id => {
      dispatch(fetchCountry(id))
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchTradesByCountry: id => {
      dispatch(fetchTradesByCountry(id));
    }
  };
}

const mapStateToProps = state => {
  return {
    country: state.countryProfile.country,
    loading: state.countryProfile.loading,
    error: state.countryProfile.error,
    products: state.products.products,
    trades: state.trades.trades,
    tradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryWithId)
