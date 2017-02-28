import axios from "axios";

function requestCountries() {
  return {
    type: "COUNTRIES_PENDING"
  };
}

function receiveCountries(json) {
  return {
    type: "COUNTRIES_FULFILLED",
    data: json
  };
}

function countriesError(json) {
  return {
    type: "COUNTRIES_REJECTED",
    data: json
  };
}

export function fetchCountries() {
  return function(dispatch) {
    dispatch(requestCountries());
    return axios.get("/api/countries")
    .then(response => {
      dispatch(receiveCountries(response.data));
    
    })
    .catch(response => {
      dispatch(countriesError(response.data));
    });
  };
}
