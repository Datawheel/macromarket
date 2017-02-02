import axios from "axios";
const ACTION_TYPE = 'GET_COMPANY';

export function fetchCompany(id) {
  const request = axios.get(`/api/company/${id}`)

  return {
    type: ACTION_TYPE,
    payload: request
  };
}
