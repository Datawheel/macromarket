import React from "react";
import CountryDropdown from "./CountryDropdown.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import Sidebar from "./Sidebar.jsx";
import {browserHistory} from "react-router";
import {Card} from "./Card.jsx";
import {fetchProduct} from "../actions/productActions";
import {fetchCountries} from "../actions/countriesActions";
import companyGrey from "../img/icons/icon-company-grey.svg";
import productGrey from "../img/icons/icon-product-grey.svg";
import productWhite from "../img/icons/icon-product-white.svg";
import {fetchTradesByProduct} from "../actions/tradesActions";

class ProductWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "exports",
      country: {
        id: "all",
        name: "all",

      }
    };
    // determines if component needs to fetch new data for random product
    this.shouldUpdate = false;
    browserHistory.listen(location => {
      this.shouldUpdate = true;
    });

  }

  componentWillMount() {
    const id = this.props.params.productWithId;
    this.props.fetchProduct(id);
    this.props.fetchCountries();
    this.props.fetchTradesByProduct(id);
  }

  componentWillUpdate() {
    if (this.shouldUpdate) {
      const id = this.props.params.productWithId;
      this.props.fetchProduct(id);
      this.props.fetchCountries();
      this.props.fetchTradesByProduct(id);
      this.shouldUpdate = false;
    }
  }

  selectFrom = item => {
    this.setState({from: item});
  }

  selectTo = item => {
    this.setState({to: item});
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  selectCountry = country => {
    const selected = {
      id: country.id,
      name: country.name
    }
    this.setState({country: selected});
  }
  render() {
    const {
      product,
      loading,
      error,
      countriesLoading,
      countriesError,
      countries,
      trades
    } = this.props;

    if (loading || !product || countriesLoading || !trades) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
        </div>
      );
    }

    if (error || countriesError) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
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
                <div className="yellow-line"></div>
              </div>
              <p>{product.description}
              </p>
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
              <p>Country</p>
            </div>
            <CountryDropdown select={this.selectCountry} selected={this.state.country.name} items={countries}/>
          </div>
          <button className="go">Go</button>
        </div>
        <div>
          {trades
            ? <div className="result-wrapper">
                {trades.map((trade, index) => {
                  const content = trade.Company;
                  content.profile_type = "company";
                  if (trade.trade_flow === this.state.selectedOption && (this.state.country.name === "all" || this.state.country.id === trade.country_id)) {
                    return <Card key={index} content={content}/>;
                  } else {
                    return null;
                  }
                })}</div>
            : null}
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
    tradesError: state.trades.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductWithId);
