import axios from "axios";
const ACTION_TYPE = 'GET_COUNTRY';

export function fetchCountry(id) {
  const request = axios.get(`/api/country/${id}`)

  return {
    type: ACTION_TYPE,
    payload: request
  };
}
