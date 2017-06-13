import api from "../api.js";

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

function requestProfileTrades() {
  return {
    type: "PROFILE_TRADES_PENDING"
  };
}

function receiveProfileTrades(json) {
  return {
    type: "PROFILE_TRADES_FULFILLED",
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

function requestCreateTrade() {
  return {
    type: "CREATE_TRADE_PENDING"
  };
}

function receiveCreateTrade(json) {
  return {
    type: "CREATE_TRADE_FULFILLED",
    data: json
  };
}

function createTradeError(json) {
  return {
    type: "CREATE_TRADE_REJECTED",
    data: json
  };
}

function requestDeleteTrade() {
  return {
    type: "DELETE_TRADE_PENDING"
  };
}

function receiveDeleteTrade(json) {
  return {
    type: "DELETE_TRADE_FULFILLED",
    data: json
  };
}

function deleteTradeError(json) {
  return {
    type: "DELETE_TRADE_REJECTED",
    data: json
  };
}

export function createTrade(companyId, productId, countryId, tradeFlow) {
  return function(dispatch) {
    dispatch(requestCreateTrade());
    return api.post(`api/trades/company/${companyId}/product/${productId}/country/${countryId}/${tradeFlow}`)
      .then(response => {
        console.log(response, "response");
        dispatch(receiveCreateTrade(response.data));
      })
      .catch(response => {
        dispatch(createTradeError(response.data));
      });
  };
}

export function createTradeForProduct(companyId, productId,tradeFlow) {
  return function(dispatch) {
    dispatch(requestCreateTrade());
    return api.post(`api/trades/company/${companyId}/product/${productId}/${tradeFlow}`)
      .then(response => {
        console.log(response, "response");
        dispatch(receiveCreateTrade(response.data));
      })
      .catch(response => {
        dispatch(createTradeError(response.data));
      });
  };
}

export function deleteTradeByProduct(companyId, productId, tradeFlow) {
  return function(dispatch) {
    dispatch(requestDeleteTrade());
    return api.delete(`api/trades/company/${companyId}/product/${productId}/${tradeFlow}`)
      .then(response => {
        dispatch(receiveDeleteTrade(response.data));
      })
      .catch(response => {
        dispatch(deleteTradeError(response.data));
      });
  };
}

export function deleteTradeByCountry(companyId, productId, countryId, tradeFlow) {
  return function(dispatch) {
    dispatch(requestDeleteTrade());
    return api.delete(`api/trades/company/${companyId}/product/${productId}/country/${countryId}/${tradeFlow}`)
      .then(response => {
        dispatch(receiveDeleteTrade(response.data));
      })
      .catch(response => {
        dispatch(deleteTradeError(response.data));
      });
  };
}

export function saveTrades(tradesToSave, tradesToDelete) {
  return function(dispatch) {
    dispatch(requestSaveTrades());
    if (tradesToSave.length > 0) {
      return api.post("api/trades", tradesToSave)
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
    } else {
      if (tradesToDelete.length > 0) {
        deleteTrades(tradesToDelete)(dispatch);
      }
    }
  };
}


export function fetchSettingsTradesByCompany(companyId) {
  return function(dispatch) {
    dispatch(requestSettingsTrades());
    return api.get(`/api/trades/company/${companyId}`)
      .then(response => {
        dispatch(receiveSettingsTrades(response.data));
      })
      .catch(response => {
        dispatch(settingsTradesError(response.data));
      });
  };
}

export function fetchTradesByCountry(countryId) {
  return function(dispatch) {
    dispatch(requestTrades());
    return api.get(`/api/trades/country/${countryId}`)
      .then(response => {
        dispatch(receiveTrades(response.data));
      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}

export function fetchTradesByProduct(productId) {
  return function(dispatch) {
    dispatch(requestTrades());
    return api.get(`/api/trades/product/${productId}`)
      .then(response => {
        dispatch(receiveTrades(response.data));
      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}

export function fetchProfileTradesByCompany(companyId) {
  return function(dispatch) {
    dispatch(requestProfileTrades());
    return api.get(`/api/trades/company/${companyId}`)
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

        dispatch(receiveProfileTrades(json));

      })
      .catch(response => {
        dispatch(tradesError(response.data));
      });
  };
}
