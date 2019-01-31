import {nest} from "d3-collection";
import api from "helpers/api";

function requestCountries() {
  return {type: "COUNTRIES_PENDING"};
}

function receiveCountries(json) {
  return {type: "COUNTRIES_FULFILLED", data: json};
}

function countriesError(json) {
  return {type: "COUNTRIES_REJECTED", data: json};
}

export function fetchCountries() {
  return function(dispatch) {
    dispatch(requestCountries());
    return api.get("/api/countries").then(response => {
      const countries = nest().key(d => d.continent).entries(response.data);
      dispatch(receiveCountries({countries, unnestedCountries: response.data}));
    }).catch(response => {
      dispatch(countriesError(response.data));
    });
  };
}
