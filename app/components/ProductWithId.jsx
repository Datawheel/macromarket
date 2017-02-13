import React from "react";
import Dropdown from "./DropDown.jsx";
import {Link} from "react-router";
import {connect} from "react-redux";
import {fetchProduct} from "../actions/productActions";

class ProductWithId extends React.Component {
  constructor(props) {
    super(props);
    this.results = [
      "Carmon",
      "Casa Silva",
      "Conosur",
      "Concha y Toro",
      "Emiliana",
      "Junta",
      "Casa Silva"
    ];

    this.from = ["USA", "Chile", "France", "China", "Germany"];
    this.state = {
      selectedFrom: this.from[0]
    };
  }

  componentWillMount() {
    const id = this.props.params.productWithId;
    this.props.fetchProduct(id);
  }

  render() {

    const {product, loading, error} = this.props;

    if (loading || !product) {
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

    return (
      <div className="detailed-content-wrapper">
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <h3>{product.name}</h3>
            <p>{product.description}
            </p>
            <h3>From</h3>
            <Dropdown list={this.from} selected={this.state.selectedFrom}/>
            <h3>To</h3>
          </div>
        </div>
        <div className="center-content">
          <div className="header-image-wrapper"></div>
          <h3>Import from Chile to US</h3>
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
    }
  };
};

const mapStateToProps = state => {
  return {
    product: state.productProfile.product,
    loading: state.productProfile.loading,
    error: state.productProfile.error || null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductWithId);
