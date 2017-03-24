import axios from "axios";
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

export function fetchProducts() {
  return function(dispatch) {
    dispatch(requestProducts());
    return axios.get("/api/products")
      .then(response => {
        const deepestOnly = response.data.filter(d => d.id.length === 8)
        const json = nest()
                      .key(d => d.id.substring(0, 2))
                      .sortKeys(ascending)
                      .key(d => d.id.substring(2, 6))
                      .sortKeys(ascending)
                      .entries(response.data)
                      .map(d => {

                        const myHs2 = d.values.shift();
                        const myNewValues = d.values.map(dd => {
                          const myHs4 = dd.values.shift();
                          return {
                            key: dd.key,
                            values: dd.values,
                            name: myHs4.name
                          };

                        })
                        const returnData = {
                          key: d.key,
                          values: myNewValues,
                          name: myHs2.values[0].name

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
