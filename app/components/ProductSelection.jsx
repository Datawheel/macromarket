import React from "react";
import {fetchProducts} from "../actions/productsActions";
import {connect} from "react-redux";

class ProductSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h2: null,
      h2Input: "",
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
    this.setState({h2: product.values, h4: null, selectedH4: null, selectedH2: product.key});
  }

  selectH4 = product => {
    this.setState({h4: product.values, selectedH4: product.key});
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // // filter categories based on input
  // filter = (product, input) => {
  //   const length = input.length;
  //   const result = [];
  //   product.values.map(product => {
  //     const words = product.name.toLowerCase().split(" ");
  //     for (let i = 0; i < words.length; i++) {
  //       if (words[i].slice(0, length) === input.toLowerCase()) {
  //         result.push(product);
  //         break;
  //       } else {
  //         if (findProduct(product.values, input)) {
  //           result.push(product);
  //         }
  //       }
  //     }
  //   });
  //   return result;
  // }


  filter = (products, input) => {
    const result = [];
    products.map(product => {
      if (this.findProduct([product], input)) {
        result.push(product);
      }
    });
    return result;
  }

  // returns true if any of the nested products match the input string
  findProduct = (products, input) => {
    let result = false
    for (let i = 0; i < products.length; i++) {
      const words = products[i].name.toLowerCase().split(" ");
      if (this.checkWords(words, input)) {
        result = true;
        break;
      }
      else {
        if (products[i].values) {
          result = this.findProduct(products[i].values, input);
          if(result) {
              break;
          }
        }
      }
    }
    return result;
  }

  // checks if any of the individual words match input string
  checkWords = (words, input) => {
    const length = input.length;
    for (let i = 0; i < words.length; i++) {
      if (words[i].slice(0, length) === input.toLowerCase()) {
        return true;
      }
    }
    return false;
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
    }
    else {
      this.props.deleteProduct(productObj);
    }
  }

  render() {
    const {loading, products, error} = this.props;
    if (loading || !products) {
      return (
        <div className="product-selection-wrapper">
          <h3 className="product-label">Categories</h3>
          <div className="product-selection"></div>
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
      <div>
        <div className="product-selection-wrapper">
          <div className="product-input-wrapper">
            <input onChange={this.handleChange} placeholder="Search a product" value={this.state.h2Input} name="h2Input"/>
          </div>
          <h3 className="product-label">Categories</h3>
          <div className="product-selection">
            {Object.keys(products).map((product, index) => {
              const values = this.filter(products[product].values, this.state.h2Input);
              const productId = products[product].key;
              if (values.length > 0) {
                return (
                  <div key={index}>
                    <div className={"colored-wrapper dropdown-item"}>
                      <div className={`color-${productId} icon-wrapper`}>
                        <img src={`/img/product_icon/hs_${productId}.png`}/>
                      </div>
                      <div>
                        <div className={`color-${productId} darker-color`}></div>
                        <p className="category-name">{products[product].name}</p>
                      </div>
                    </div>
                    {values.map(product => {
                      return (
                        <div className={this.state.selectedH2 === product.key
                          ? "selectedH2"
                          : null} key={product.key} onClick={this.selectH2.bind(this, product)}>
                          <p className="product-name">{`${product.key} - ${product.name}`}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
        </div>
        {this.state.h2
          ? <div className="product-selection-wrapper">
              <h3 className="product-label">HS4</h3>
              <div className="product-selection">
                <div>
                  {this.filter(this.state.h2, this.state.h2Input).map((product, index) => {
                    const id = `${this.state.selectedH2}${product.key}`;
                    return (
                      <div className={this.state.selectedH4 === product.key
                        ? "selectedH4 product"
                        : "product"} key={index} onClick={this.selectH4.bind(this, product)}>
                        <div>
                          <div className="product-id">
                            <p>{id}</p>
                          </div>
                          <p className="product-name hs4">{product.name}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          : null}

        {this.state.h4
          ? <div className="product-selection-wrapper">
              <h3 className="product-label">HS6</h3>
              <div className="product-selection">
                {this.filter(this.state.h4, this.state.h2Input).map((product, index) => {
                  const id = product.id.slice(2, 8);
                  return (
                    <div key={index} className={this.props.selectedProducts[product.id]
                      ? "selectedItem product"
                      : "product"} onClick={this.selectProduct.bind(this, product)}>

                      <div className="product-id">
                        <p>{id}</p>
                      </div>
                      <p className="product-name hs6">{product.name}</p>
                    </div>
                  );
                })}

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
