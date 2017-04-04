import React from "react";
import {fetchProducts} from "../actions/productsActions";
import {connect} from "react-redux";

class ProductSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h2: null,
      selectedH2: null,
      selectedH4: null,
      h4: null,
      h6: null
    };
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  selectH2 = product => {
    this.setState({h2: product.values, h4: null, selectedH4: null, selectedH2: product.name});

  }

  selectH4 = product => {
    this.setState({h4: product.values, selectedH4: product.name});
  }

  selectProduct = product => {
    const productObj = {
      product_id: product.id,
      newProduct: true,
      trade_flow: this.props.tradeFlow,
      Product: {
        name: product.name
      }
    };
    if (!this.props.selectedProducts[product.id]) {
      this.props.addProduct(productObj);
    } else {
      this.props.deleteProduct(productObj);
    }
  }

  render() {
    const {loading, products, error} = this.props;
    if (loading || !products) {
      return (
        <div className="product-selection-wrapper">
          <h3 className="product-label">Categories</h3>
          <div className="product-selection"></div></div>
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
      <div>
      <div className="product-selection-wrapper">
        <h3 className="product-label">Categories</h3>
        <div className="product-selection">
          {Object.keys(products).map((product, index) => {
            return (
              <div className={this.state.selectedH2 === products[product].name
                ? "selectedH2"
                : null} key={index} onClick={this.selectH2.bind(this, products[product])}>
                <p>{products[product].name}</p>
              </div>
            );
          })}
        </div></div>
        {this.state.h2
          ? <div className="product-selection-wrapper">
              <h3 className="product-label">HS4</h3>
              <div className="product-selection">
                <div>
                  {this.state.h2.map((product, index) => {
                    return (
                      <div className={this.state.selectedH4 === product.name
                        ? "selectedH4"
                        : null} key={index} onClick={this.selectH4.bind(this, product)}>
                        <p>{product.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          : null}

        {this.state.h4
          ? <div className="product-selection-wrapper">
              <h3 className="product-label" >HS6</h3>
              <div className="product-selection">
                <div>
                  {this.state.h4.map((product, index) => {
                    return (
                      <div key={index}>

                        <div className={this.props.selectedProducts[product.id]
                          ? "selectedItem"
                          : null} onClick={this.selectProduct.bind(this, product)}>
                          <p>{product.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          : null}
        </div>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    }
  };
};

const mapStateToProps = state => {
  return {products: state.products.products, loading: state.products.loading, error: state.products.error};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelection);
