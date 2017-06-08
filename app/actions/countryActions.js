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

function requestCaTrades() {
  return {
    type: "CA_TRADES_PENDING"
  };
}

function receiveCaTrades(json) {
  return {
    type: "CA_TRADES_FULFILLED",
    data: json
  };
}

function caTradesError(json) {
  return {
    type: "CA_TRADES_REJECTED",
    data: json
  };
}

//Fetchs country then fetchs connectamericas companies in that coutnry
export function fetchCountry(id) {
  return function(dispatch) {
    dispatch(requestCountry());
    return api.get(`/api/countries/${id}`)
    .then(response => {
      dispatch(receiveCountry(response.data));
        dispatch(requestCaTrades());
      return api.get(`/api/trades/ca_country/${response.data.id_ca}`)
        .then(response => {
          console.log(response);
          dispatch(receiveCaTrades(response.data));
        })
        .catch(response => {
          dispatch(caTradesError(response.data));
        });
    })
    .catch(response => {
      dispatch(countryError(response.data));
    });
  };
}
