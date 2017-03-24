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

function requestDeleteTrades() {
  return {
    type: "DELETE_TRADES_PENDING"
  };
}

function receiveDeleteTrades(json) {
  return {
    type: "DELETE_TRADES_FULFILLED",
    data: json
  };
}

function deleteTradesError(json) {
  return {
    type: "DELETE_TRADES_REJECTED",
    data: json
  };
}

export function deleteTrades(trades) {
  console.log(trades);
  return function(dispatch) {
    dispatch(requestDeleteTrades());
    return axios.delete("api/trades", trades)
      .then(response => {
        dispatch(receiveDeleteTrades(response.data));
      })
      .catch(response => {
        dispatch(deleteTradesError(response.data));
      });
  };
}

export function createTrades(trades, id) {
  return function(dispatch) {
    dispatch(requestTrades());
    return axios.post(`/api/trades/${id}`, trades)
      .then(response => {
        dispatch(receiveTrades(response.data));
      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
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


export function fetchProductsByCompany(id) {
  return function(dispatch) {
    dispatch(requestTrades());
    return axios.get(`/api/productsByCompany/${id}`)
      .then(response => {
        const json = {
          exports: [],
          imports: [],
          countries: []
        };

        response.data.map(product => {
          if (json.countries.filter(country => {
              return country.name === product.Country.name
            }).length === 0) {
            json.countries.push(product.Country);
          }

          if (product.trade_flow === "exports") {
            json.exports.push(product);
          }
          if (product.trade_flow === "imports") {
            json.imports.push(product);
          }

        });

        dispatch(receiveTrades(json));

      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}
