import axios from "axios";
const ACTION_TYPE = 'GET_COMPANIES';

export function fetchCompanies() {
  const request = axios.get('/api/companies');

  return {
    type: ACTION_TYPE,
    payload: request
  };
}
