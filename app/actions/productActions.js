import axios from "axios";
const ACTION_TYPE = 'GET_PRODUCT';

export function fetchProduct(id) {
  const request = axios.get(`/api/product/${id}`)

  return {
    type: ACTION_TYPE,
    payload: request
  };
}
