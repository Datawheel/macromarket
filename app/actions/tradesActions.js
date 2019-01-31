import api from "helpers/api.js";

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

export function createTradeForProduct(companyId, productId, tradeFlow) {
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


function contains(id, array) {
  let result = false;
  array.map(item => {
    if (id === item.id) {
      result = true;
    }
  });
  return result;
}

function findIndexX(category, name, array, attr) {
  let index = array.length;
  for (let i = 0; i < array.length; i++) {
    const itemCategory = attr === "products" ? array[i].id.slice(0, 2) : array[i][attr];
    if (category === itemCategory) {
      index = i + 1;
      if (name.toLowerCase() < array[i].name.toLowerCase()) {
        return i;
      }
    }
  }
  return index;
}

function compare(a, b) {
  if (a.continent < b.continent) {
    return -1;
  }
  if (a.continent > b.continent) {
    return 1;
  }
  return 0;
}

export function fetchProfileTradesByCompany(companySlug) {
  return function(dispatch) {
    dispatch(requestProfileTrades());
    if (companySlug.slice(0, 3) === "ca_") {
      return dispatch(receiveProfileTrades({exports: [], imports: [], countries: []}));
    }
    else {
      return api.get(`/api/trades/company/${companySlug}`)
        .then(response => {
          const exports = [];
          const imports = [];
          const countries = [];

          response.data.map(product => {

            if (product.Country) {
              if (!contains(product.Country.id, countries)) {
                // countries.push(product.Country);
                const index = findIndexX(product.Country.continent, product.Country.name, countries, "continent");
                countries.splice(index, 0, product.Country);
                countries.sort(compare);
              }
            }
            if (product.trade_flow === "exports" && !contains(product.Product.id, exports)) {

              const index = findIndexX(product.Product.id.slice(0, 2), product.Product.name, exports, "products");
              exports.splice(index, 0, product.Product);
            }
            if (product.trade_flow === "imports" && !contains(product.Product.id, imports)) {
              const index = findIndexX(product.Product.id.slice(0, 2), product.Product.name, imports, "products");
              imports.splice(index, 0, product.Product);
            }

          });

          const sortedResponse = {
            exports,
            imports,
            countries
          };

          dispatch(receiveProfileTrades(sortedResponse));
        })
        .catch(response => {
          dispatch(tradesError(response.data));
        });
    }
  };
}
