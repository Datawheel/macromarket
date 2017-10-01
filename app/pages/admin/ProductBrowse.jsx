import React from "react";
import {nest} from "d3-collection";
import {ascending} from "d3-array";
import "../../components/ProductSelection.css";

class ProductBrowse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      h2: null,
      selectedH2: null,
      selectedH4: null,
      h4: null,
      h6: null,
      error: null,
      products: nest()
        .key(d => d.id.substring(0, 2))
        .sortKeys(ascending)
        .key(d => d.id.substring(2, 4))
        .sortKeys(ascending)
        .key(d => d.id.substring(4, 6))
        .sortKeys(ascending)
        .entries(this.props.products)
        .map(d => {
          const myHs2 = d.values.shift();
          const myNewValues = d.values.map(dd => {
            const myHs4 = dd.values.shift();
            const innerValues = dd.values.map(ddd => {
              const myHs6 = ddd.values.shift();
              return {
                key: ddd.key,
                values: ddd.values,
                name: myHs6.name
              };
            });
            return {
              key: dd.key,
              values: innerValues,
              name: myHs4.values[0].name
            };
          });
          const returnData = {
            key: d.key,
            values: myNewValues,
            name: myHs2.values[0].values[0].name
          };

          return returnData;
        })
    };
  }

  componentWillMount() {
    // console.log("this.props.products")
    // console.log(this.props.products)
  }

  componentDidMount() {
    // this.props.fetchProducts();
    // this.props.fetchSettingsTradesByCompany(this.props.companyId);
  }

  selectH2 = product => {
    this.setState({h2: product.values, h4: null, selectedH4: null, selectedH2: product.key});
  }

  selectH4 = product => {
    this.setState({h4: product.values, selectedH4: product.key});
  }

  selectProduct = product => {
    this.props.selectProduct(product);
    // const tradeFlow = this.props.tradeFlow;
    // const filteredProducts = {};
    //
    // this.props.trades.map(product => {
    //   if (!filteredProducts[product.product_id] && product.trade_flow === this.props.tradeFlow) {
    //     filteredProducts[product.product_id] = product
    //   }
    // });
    //
    // if (Object.keys(filteredProducts).length >= 5) {
    //   this.setState({
    //     error: `You can only select 5 products to ${tradeFlow.slice(0, tradeFlow.length - 1)}.`
    //   })
    // } else if (filteredProducts[product.id]) {
    //   this.setState({error: `You have already selected this product.`})
    // } else {
    //   this.setState({error: null});
    //   this.props.selectProduct(this.props.companyId, product.id, tradeFlow);
    // }
  }

  render() {
    const {products} = this.state;
    return (
      <div className="selection-wrapper">
        <div className="product-selection-wrapper selected">
          <h3 className="product-label ">Categories</h3>
          <div className="product-selection">
            {products
              ? <div>{Object.keys(products).map((product, index) => {
                const productId = products[product].key;
                const values = products[product].values;
                if (values.length > 0) {
                  return (
                    <div key={index}>
                      <div className={"colored-wrapper dropdown-item"}>
                        <div className={`color-${productId} icon-wrapper`}>
                          <img src={`/images/product_icon/hs_${productId}.png`}/>
                        </div>
                        <div>
                          <div className={`color-${productId} darker-color`}></div>
                          <p className="category-name">{products[product].name}</p>
                        </div>
                      </div>
                      {values.map(product => {
                        return (
                          <div className={this.state.selectedH2 === product.key
                            ? "selectedH2 product"
                            : "product"} key={product.key} onClick={this.selectH2.bind(this, product)}>
                            <p className="product-name">{`${product.key} - ${product.name}`}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })}</div>
              : null}
          </div>
        </div>
        <div className={this.state.h2 ? "product-selection-wrapper selected" : "product-selection-wrapper"}>
          <h3  className="product-label" >HS4</h3>
          <div className="product-selection">
            {this.state.h2
              ? <div>
                {this.state.h2.map((product, index) => {
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
              : null}
          </div>
        </div>
        <div className={this.state.h4 ? "product-selection-wrapper selected" : "product-selection-wrapper"}>
          <h3 className="product-label">HS6</h3>
          <div className="product-selection">
            {this.state.h4
              ? <div>
                {this.state.h4.map((product, index) => {
                  const id = product.id.slice(2, 8);
                  return (
                    <div key={index} className="product" onClick={this.selectProduct.bind(this, product)}>
                      <div className="product-id">
                        <p>{id}</p>
                      </div>
                      <p className="product-name hs6">{product.name}</p>
                    </div>
                  );
                })}</div>
              : null}
          </div>
        </div>
        <div className="error-wrapper">{this.state.error
          ? <p>{this.state.error}</p>
          : null}</div>
      </div>
    );
  }
}

export default ProductBrowse;