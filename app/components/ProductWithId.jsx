import React from "react";
import Dropdown from "./DropDown.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import Sidebar from "./Sidebar.jsx";
import {fetchProduct} from "../actions/productActions";
import {fetchCountries} from "../actions/countriesActions";

class ProductWithId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: {name: "Angola", id: "afago"},
      to: {name: "Angola", id: "afago"}
    };

    this.results = [
      "Carmon",
      "Casa Silva",
      "Conosur",
      "Concha y Toro",
      "Emiliana",
      "Junta",
      "Casa Silva"
    ];
  }

  componentWillMount() {
    const id = this.props.params.productWithId;
    this.props.fetchProduct(id);
    this.props.fetchCountries();
  }

  selectFrom = item => {

    this.setState({from: item});
  }

  selectTo = item => {
    this.setState({to: item});
  }

  render() {
    const {
      product,
      loading,
      error,
      countriesLoading,
      countriesError,
      countries
    } = this.props;

    if (loading || !product || countriesLoading) {
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
      : `/img/product/${fallbackId}.jpg`;

    return (
      <div className="detailed-content-wrapper product">
        <div className="header">
          <Sidebar>
            <div className="profile-info">
            <h3>{product.name}</h3>
            <p>{product.description}
            </p></div>
          </Sidebar>
          <div className="center-content">
            <div className="header-image-wrapper">
              <div className="background-image" style={{
                backgroundImage: `url(${img})`
              }}></div>
            </div>
          </div>
          <div className="filter-wrapper">
            <div className="filter">
              <h4>From</h4>
              <Dropdown select={this.selectFrom} selected={this.state.from.id} items={countries}></Dropdown>
            </div>
            <div className="filter">
              <h4>To</h4>
              <Dropdown select={this.selectTo} selected={this.state.to.id} items={countries}></Dropdown>
            </div>
            <button>Go</button>
          </div>
          <h2>{`Exports from ${this.state.from.name}
            to ${this.state.to.name}`}</h2>
          <div className="result-wrapper">
            {this.results.map((result, i) => {
              return (
                <Link key={i} to="/company/555">
                  <div className="result-wrapper">
                    <div className="result">
                      <p>{result}</p>
                      <p>Chilean Wine</p>
                    </div>
                  </div>
                </Link>
              );
            })}
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
    countriesError: state.countries.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductWithId);
