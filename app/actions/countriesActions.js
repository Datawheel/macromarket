import axios from "axios";
import {nest} from "d3-collection";
import {ascending} from "d3-array";

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
        const countries = nest()
          .key(d => {
            return d.continent;
          })
          .entries(response.data);

        dispatch(receiveCountries(countries));

      })
      .catch(response => {
        dispatch(countriesError(response.data));
      });
  };
}
