import api from "helpers/api.js";

function requestProduct() {
  return {
    type: "PRODUCT_PENDING"
  };
}

function receiveProduct(json) {
  return {
    type: "PRODUCT_FULFILLED",
    data: json
  };
}

function productError(json) {
  return {
    type: "PRODUCT_REJECTED",
    data: json
  };
}

export function fetchProduct(id) {
  return function(dispatch) {
    dispatch(requestProduct());
    return api.get(`/api/products/${id}`)
    .then(response => {
      dispatch(receiveProduct(response.data));
    })
    .catch(response => {
      dispatch(productError(response.data));
    });
  };
}
