import axios from "axios";
const ACTION_TYPE = 'GET_PRODUCTS';

export function fetchProducts() {
  const request = axios.get('/api/products');

  return {
    type: ACTION_TYPE,
    payload: request
  };
}
