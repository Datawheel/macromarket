import api from "../api";

function requestCountry() {
  return {
    type: "COUNTRY_PENDING"
  };
}
function receiveCountry(json) {
  return {
    type: "COUNTRY_FULFILLED",
    data: json
  };
}

function countryError(json) {
  return {
    type: "COUNTRY_REJECTED",
    data: json
  };
}

export function fetchCountry(id) {
  return function(dispatch) {
    dispatch(requestCountry());
    return api.get(`/api/countries/${id}`)
    .then(response => {
      dispatch(receiveCountry(response.data));

    })
    .catch(response => {
      dispatch(countryError(response.data));
    });
  };
}
