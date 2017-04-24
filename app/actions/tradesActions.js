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

function requestSettingsTrades() {
  return {
    type: "SETTINGS_TRADES_PENDING"
  };
}

function receiveSettingsTrades(json) {
  return {
    type: "SETTINGS_TRADES_FULFILLED",
    data: json
  };
}

function settingsTradesError(json) {
  return {
    type: "SETTINGS_TRADES_REJECTED",
    data: json
  };
}

function requestSaveTrades() {
  return {
    type: "SAVE_TRADES_PENDING"
  };
}

function receiveSaveTrades(json) {
  return {
    type: "SAVE_TRADES_FULFILLED",
    data: json
  };
}

function saveTradesError(json) {
  return {
    type: "SAVE_TRADES_REJECTED",
    data: json
  };
}

function deleteTrades(trades) {
  return function(dispatch) {
    dispatch(requestSaveTrades());
    return axios.post("api/deleteTrades", trades)
      .then(response => {
        dispatch(receiveSaveTrades(response.data));
      })
      .catch(response => {
        dispatch(saveTradesError(response.data));
      });
  };
}

export function saveTrades(tradesToSave, tradesToDelete) {
  return function(dispatch) {
    dispatch(requestSaveTrades());
    if (tradesToSave.length > 0) {
      return axios.post("api/trades", tradesToSave)
        .then(response => {
          if (tradesToDelete.length > 0) {
            deleteTrades(tradesToDelete)(dispatch);
          } else {
            dispatch(receiveSaveTrades(response.data));
          }
        })
        .catch(response => {
          dispatch(saveTradesError(response.data));
        });
    }
    else {
      if (tradesToDelete.length > 0) {
        deleteTrades(tradesToDelete)(dispatch);
      }
    }
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

export function fetchTradesForSettings(id) {
  return function(dispatch) {
    dispatch(requestSettingsTrades());
    return axios.get(`/api/tradesByCompany/${id}`)
      .then(response => {
        dispatch(receiveSettingsTrades(response.data));
      })
      .catch(response => {
        dispatch(settingsTradesError(response.data));
      });
  };
}

export function fetchTradesByCountry(id) {
  return function(dispatch) {
    dispatch(requestTrades());
    return axios.get(`/api/tradesByCountry/${id}`)
      .then(response => {
        dispatch(receiveTrades(response.data));
      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}

export function fetchTradesByProduct(id) {
  return function(dispatch) {
    dispatch(requestTrades());
    return axios.get(`/api/tradesByProduct/${id}`)
      .then(response => {
        dispatch(receiveTrades(response.data));
      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}

export function fetchTradesByCompany(id) {
  return function(dispatch) {
    dispatch(requestTrades());
    return axios.get(`/api/tradesByCompany/${id}`)
      .then(response => {
        const json = {
          exports: {},
          imports: {},
          countries: {}
        };

        response.data.map(product => {
          if (!json.countries[product.Country.id]) {
            json.countries[product.Country.id] = product.Country;
          }

          if (product.trade_flow === "exports" && !json.exports[product.Product.id]) {
            json.exports[product.Product.id] = product.Product;
          }

          if (product.trade_flow === "imports" && !json.imports[product.Product.id]) {
            json.imports[product.Product.id] = product.Product;
          }
        });

        dispatch(receiveTrades(json));

      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}
