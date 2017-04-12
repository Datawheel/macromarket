import React from "react";
import Sidebar from "./Sidebar.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import Dropdown from "./CountryDropdown.jsx";
import {fetchCountry} from '../actions/countryActions';
import {fetchProducts} from "../actions/productsActions";

class CountryWithId extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.params.countryWithId;
    this.props.fetchCountry(id);
    this.props.fetchProducts();
  }

  render() {
    const {country, loading, error, products} = this.props;
    console.log(products);

    if (loading || !country || !products) {
      return (
        <div className="detailed-content-wrapper">
          <div>loading...</div>
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
              </div>
            </div>
          </div>
        </div>
        <div className="filter-wrapper">
          <div className="filter">
            <p>Filter Products</p>
            <Dropdown  selected={products[0]} items={products}></Dropdown>
          </div>
          <div className="filter">
            <p>Filter Companies</p>
          </div>
          <button className="go">Go</button>
        </div>
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
    }
  };
}

const mapStateToProps = state => {
  return {country: state.countryProfile.country, loading: state.countryProfile.loading, error: state.countryProfile.error, products: state.products.products};
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryWithId)
