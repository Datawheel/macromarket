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
        // var h2 = {};
        //
        // response.data.map(product => {
        //   if (product.id.length === 2) {
        //     h2[product.id] = []
        //   }
        // })
        //
        // h2.map(key => {
        //
        // })
        //
        // // console.log(h2);


      })
      .catch(response => {
        dispatch(productsError(response.data));
      });
  };
}
