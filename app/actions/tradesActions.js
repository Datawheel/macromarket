import axios from "axios";

function requestTrades() {
  return {
    type: "TRADES_PENDING"
  };
}

function receiveTrades(json) {
  return {
    type: "TRADES_FULFILLED",
    data: json
  };
}

function tradesError(json) {
  return {
    type: "TRADES_REJECTED",
    data: json
  };
}

export function fetchTrades(id) {
  return function(dispatch) {
    dispatch(requestTrades());
    return axios.get(`/api/productsByCompany/${id}`)
    .then(response => {
      dispatch(receiveTrades(response.data));
    })
    .catch(response => {
      dispatch(tradesError(response.data));
    });
  };
}
