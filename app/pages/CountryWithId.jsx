import React from "react";
import Sidebar from "components/Sidebar";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchCountry} from '../actions/countryActions';
import "./Detailed.css";
import Select from 'react-select';

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "exports",
      product: {
        label: "All",
        value: "all"
      },
      companyFilter: null
    };
  }

  componentWillMount() {
    const id = this.props.params.countryWithId;
    this.props.fetchCountry(id);
  }

  handleOptionChange = selectedOption => {
    this.setState({selectedOption});
  }
  selectDropDown = item => {
    this.setState({product: item});
  }
  arrowRenderer = () => {
    return (
      <span className="chevron bottom"></span>
    );
  }

  optionRenderer = (option) => {
    if (option.value === "all") {
      return (
        <div>
          <div className={`colored-wrapper`}>
            <p className="all">{option.label}</p>
          </div>
        </div>
      )
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

  valueRenderer = (value) => {
    return (
      <div>
        <p>{value.label}</p>
      </div>
    )
  }

  render() {
    var options = [
      {
        value: 'all',
        label: 'All'
      }, {
        value: '01',
        label: 'Animal Products'
      }, {
        value: '02',
        label: 'Vegetable Products'
      }, {
        value: '03',
        label: 'Animal and Vegetable Bi-Products'
      }
    ];

    const {country, loading, error} = this.props;
    if (loading || !country) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading..</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="detailed-content-wrapper">
          <h2>Error</h2>
          <p>Please refresh the page.</p>
        </div>
      );
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
            <Select valueRenderer={this.optionRenderer} optionClassName={"dropdown-option"} optionRenderer={this.optionRenderer} arrowRenderer={this.arrowRenderer} clearable={false} name="form-field-name" value={this.state.product.value} options={options} onChange={this.selectDropDown}/>
          </div>
          <button className="go">Go</button>
        </div>
        <div className="result-wrapper-outer">
          <div className="result-wrapper"></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCountry: id => {
      dispatch(fetchCountry(id))
    }
  };
}

const mapStateToProps = state => {
  return {
    country: state.countryProfile.country,
    loading: state.countryProfile.loading,
    error: state.countryProfile.error || null
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryWithId)
