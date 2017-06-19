import api from "../api.js";
//import receiveAuth from "./authenticationActions";

function requestCompany() {
  return {
    type: "COMPANY_PENDING"
  };
}

export function receiveCompany(json) {
  return {
    type: "COMPANY_FULFILLED",
    data: json
  };
}

export function receiveAuthCompany(json) {
  return {
    type: "COMPANY_AUTH_FULFILLED",
    data: json
  };
}

function companyError(json) {
  return {
    type: "COMPANY_REJECTED",
    data: json
  };
}

function receiveAuth(json) {
  return {
    type: "AUTH_FULFILLED",
    data: json
  };
}

function receiveAuthError(json) {
  return {
    type: "AUTH_REJECTED",
    data: json
  };
}

function requestAuth() {
  return {
    type: "AUTH_PENDING"
  };
}
export function fetchCompany(id) {
  return function(dispatch) {
    dispatch(requestCompany());
    return api.get(`/api/companies/${id}`)
      .then(response => {
        dispatch(receiveCompany(response.data));
      })
      .catch(response => {
        dispatch(companyError(response.data));
      });
  };
}

export function authenticateAndFetchCompany() {
  return function(dispatch) {
    dispatch(requestAuth());
    api.get("/api/auth/isAuthenticated", {
      withCredentials: true
    }).then(response => {

      if (response.data.msg) {
        dispatch(receiveAuthError(response.data.msg));
      }
      else {
        const user = response.data;
        console.log(user.company_id, "ID");
        if (user.company_id) {
          return api.get(`/api/companies/${user.company_id}`).then(companyResponse => {
              console.log(companyResponse, "RESPOSNE WHYYYYYYY")
            dispatch(receiveAuthCompany(companyResponse.data));
          }).then(() => {
            dispatch(receiveAuth(response.data));
          });
        }
        dispatch(receiveAuth(response.data));
      }
    }, err => {
      dispatch(receiveAuthError(err));
    });
  };
}
