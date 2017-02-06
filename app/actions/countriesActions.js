import axios from "axios";
const ACTION_TYPE = 'GET_COUNTRIES';

export function fetchCountries() {
  const request = axios.get('/api/countries');

  return {
    type: ACTION_TYPE,
    payload: request
  };
}
