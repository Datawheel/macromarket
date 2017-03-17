import axios from "axios";

function requestProducts() {
  return {
    type: "PRODUCTS_PENDING"
  };
}

function receiveProducts(json) {
  return {
    type: "PRODUCTS_FULFILLED",
    data: json
  };
}

function productsError(json) {
  return {
    type: "PRODUCTS_REJECTED",
    data: json
  };
}

export function fetchProducts() {
  return function(dispatch) {
    dispatch(requestProducts());
    return axios.get("/api/products")
      .then(response => {
        dispatch(receiveProducts(response.data));

      })
      .catch(response => {
        dispatch(productsError(response.data));
      });
  };
}

export function fetchProductsByCompany(id) {
  return function(dispatch) {
    dispatch(requestProducts());
    return axios.get(`/api/productsByCompany/${id}`)
      .then(response => {
        const json = {
          exports: [],
          imports: [],
          countries: []
        };

        response.data.map(product => {
          if (!json.countries.includes(product.Country.name)) {
            json.countries.push(product.Country.name);
          }

          if (product.trade_flow === "exports") {
            json.exports.push(product);
          }
          if (product.trade_flow === "imports") {
            json.imports.push(product);
          }
        });

        dispatch(receiveProducts(json));

      })
      .catch(response => {
        dispatch(productsError(response.data));
      });
  };
}
