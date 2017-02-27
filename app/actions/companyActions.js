import axios from "axios";
//import receiveAuth from "./authenticationActions";

function requestCompany() {
  return {
    type: "COMPANY_PENDING"
  };
}

export function receiveCompany(json) {
  console.log(json);
  return {
    type: "COMPANY_FULFILLED",
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

export function fetchCompany(id) {
  return function(dispatch) {
    dispatch(requestCompany());
    return axios.get(`/api/company/${id}`)
      .then(response => {
        dispatch(receiveCompany(response.data));
      })
      .catch(response => {
        dispatch(companyError(response.data));
      });
  };
}

export function authenticateAndFetchCompany(token) {
  return function(dispatch) {
    const config = {
      headers: {
        Authorization: `JWT ${token}`
      }
    };
    axios.get("/api/authenticate", config).then(response => {
      dispatch(receiveAuth(response.data));
      const {user} = response.data;
      if (user.company_id) {
        return axios.get(`/api/company/${user.company_id}`).then(companyResponse => {
          dispatch(receiveCompany(companyResponse.data));
        });
      }
    }, err => {
      dispatch(receiveAuthError(err));
    });
  };
}
