import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCountry} from '../actions/countryActions';
import {fetchProducts} from '../actions/productsActions';
import {fetchTradesByCountry} from "../actions/tradesActions";
import {Card} from "../components/Card.jsx";
import "./Detailed.css";
import "../components/Dropdown.css";
import Select from "react-select";
import Dropdown from "../components/Dropdown2"
import {arrowRenderer, productOptionRenderer, productValueRenderer} from "../components/Dropdown"

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "all",
      product: {
        label: "All",
        value: "all"
      }
    };
  }

  componentDidMount() {
    const id = this.props.params.countryWithId;
    this.props.fetchCountry(id);
    this.props.fetchProducts();
    this.props.fetchTradesByCountry(id);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.countryWithId !== this.props.params.countryWithId) {
      const id = newProps.params.countryWithId
      this.props.fetchCountry(id);
      this.props.fetchProducts();
      this.props.fetchTradesByCountry(id);
    }
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }

  arrowRenderer = () => {
    return (
      <span className="chevron bottom"></span>
    );
  }


  productValueRenderer(value) {
    const id = value.value;
    const colorName = `color-${id}`;
    return (
      <div>
        <div className={`colored-wrapper`}>
          <div className={`${colorName} product-selected-wrapper icon-wrapper`}>
            <img className="product_icon" src={`/images/product_icon/hs_${id}.png`}></img>
          </div>
          <div>
            <p className="product-selected">{value.label}</p>
          </div>
        </div>
      </div>
    )
  }

  productOptionRenderer(option) {
    if (option.value === "all") {
      return (
        <div>
          <div className={`colored-wrapper`}>
            <p className="all">{option.label}</p>
          </div>
        </div>
      );
    }
    const id = option.value;
    const colorName = `color-${id}`;
    return (
      <div>
        <div className={`colored-wrapper`}>
          <div className={`${colorName} icon-wrapper`}>
            <img className="product_icon" src={`/images/product_icon/hs_${id}.png`}></img>
          </div>
          <div>
            <p>{option.label}</p>
          </div>
        </div>
      </div>
    )
  }

  selectDropDown = item => {
    this.setState({product: item});
  }

  render() {
    const {
      country,
      loading,
      error,
      products,
      trades,
      caTrades
    } = this.props;

    if (!country || !products) {
      return (
        <div className="detailed-content-wrapper blue-loading">
          <div>loading..</div>
        </div>
      );
    }

    const dropDownProducts = products.map(product => {
      return {value: product.key, label: product.name}
    });

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    let allTrades = [];

    if (caTrades && trades) {
      allTrades = caTrades.concat(trades);
    }

    const continentId = country.id.substring(0, 2);
    const placeImg = country.flickr_link
      ? `/images/country/${country.id}.jpg`
      : `/images/country/${continentId}.jpg`;

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
                <img className="flag" src={`/images/flags/country_${country.id}.png`}></img>
              </div>
              <div className="section-wrapper continent-wrapper">
                <img src={`/images/flags/country_${continentId}.png`}></img>
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
              <span><img src="/images/icons/icon-product-grey.svg"/></span>
              <p>Filter Products</p>
            </div>
            <Dropdown select={this.selectDropDown} value={this.state.product.value}  options={dropDownProducts}></Dropdown>
            {/* <Select valueRenderer={this.productValueRenderer} optionClassName={"dropdown-option"} optionRenderer={this.productOptionRenderer} arrowRenderer={this.arrowRenderer} clearable={false} name="form-field-name" value={this.state.product.value} options={dropDownProducts} onChange={this.selectDropDown}/>*/}
          </div>
        </div>
        <div className="result-wrapper-outer">
        {allTrades
          ? <div className="result-wrapper">
              {allTrades.map((trade, index) => {
                if (!trade.profile_type) {
                  const content = trade.Company;
                  content.profile_type = "company";
                  if ((trade.trade_flow === `${this.state.selectedOption}` || this.state.selectedOption === "all") && (this.state.product.value === "all" || this.state.product.value === trade.product_id.slice(0, 2))) {
                    return <Card key={index} content={content}/>;
                  }
                } else {
                  if (this.state.selectedOption === "all" && this.state.product.value === "all" ) {
                    return <Card key={index} content={trade}/>;
                  }
                }
              })}
            </div>
          : <p>Loading</p>}
      </div></div>
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
    },
    fetchCaTradesByCountry: id => {
      dispatch(fetchCaTradesByCountry(id));
    }
  };
}

const mapStateToProps = state => {
  return {
    country: state.countryProfile.country,
    loading: state.countryProfile.loading,
    error: state.countryProfile.error || null,
    products: state.products.products,
    trades: state.trades.trades,
    tradesLoading: state.trades.loading,
    caTrades: state.trades.caTrades,
    caTradesLoading: state.trades.loading,
    tradesError: state.trades.error
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryWithId)
