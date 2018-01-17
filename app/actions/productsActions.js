import api from "../api.js";
import {nest} from "d3-collection";
import {ascending} from "d3-array";
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

function requestSearchProducts() {
  return {
    type: "SEARCH_PRODUCTS_PENDING"
  };
}

function receiveSearchProducts(json) {
  return {
    type: "SEARCH_PRODUCTS_FULFILLED",
    data: json
  };
}

function searchProductsError(json) {
  return {
    type: "SEARCH_PRODUCTS_REJECTED",
    data: json
  };
}

export function fetchUnNestedProducts() {
  return function(dispatch) {
    dispatch(requestSearchProducts());
    return api.get("/api/products")
      .then(response => {
        dispatch(receiveSearchProducts(response.data));
      })
      .catch(response => {
        dispatch(searchProductsError(response.data));
      });
  };
}

export function fetchProducts() {
  return function(dispatch) {
    dispatch(requestProducts());
    return api.get("/api/products")
      .then(response => {
        const json = nest()
          .key(d => d.id.substring(0, 2))
          .sortKeys(ascending)
          .key(d => d.id.substring(2, 4))
          .sortKeys(ascending)
          .key(d => d.id.substring(4, 6))
          .sortKeys(ascending)
          .entries(response.data)
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
                }
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

            return returnData
          })

        dispatch(receiveProducts(json));
      })
      .catch(response => {
        dispatch(productsError(response.data));
      });
  };
}
