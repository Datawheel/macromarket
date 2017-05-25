import api from "../api.js";

function requestCompanies() {
  return {
    type: "COMPANIES_PENDING"
  };
}

function receiveCompanies(json) {
  return {
    type: "COMPANIES_FULFILLED",
    data: json
  };
}

function companiesError(json) {
  return {
    type: "COMPANIES_REJECTED",
    data: json
  };
}

export function fetchCompanies() {
  return function(dispatch) {
    dispatch(requestCompanies());
    return  api.get(`/api/companies`)
    .then(response => {
      dispatch(receiveCompanies(response.data));

    })
    .catch(response => {
      dispatch(companiesError(response.data));
    });
  };
}
