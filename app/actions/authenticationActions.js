import api from "../api.js";

function requestAuth() {
  return {
    type: "AUTH_PENDING"
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

function requestLogin() {
  return {
    type: "LOG_IN_PENDING"
  };
}

function receiveLogin(json) {
  return {
    type: "LOG_IN_FULFILLED",
    data: json
  };
}

function receiveLoginError(json) {
  return {
    type: "LOG_IN_REJECTED",
    data: json
  };
}

function requestLogout() {
  return {
    type: "LOG_OUT_PENDING"
  };
}

function receiveLogout(json) {
  return {
    type: "LOG_OUT_FULFILLED",
    data: json
  };
}

function receiveLogoutError(json) {
  return {
    type: "LOG_OUT_REJECTED",
    data: json
  };
}

export function authenticate(token) {
  return function(dispatch) {
    dispatch(requestAuth());
    api.get("/api/auth/isAuthenticated").then(response => {
      dispatch(receiveAuth(response.data));
    }, err => {
      dispatch(receiveAuthError(err));
    });
  };
}

export function login(email, password) {
  return function(dispatch) {

    dispatch(requestLogin());
    return api.post("api/auth/login", {
      email,
      password
    })
    .then(response => {
      dispatch(receiveLogin(response.data));
      authenticate()(dispatch);
    })
    .catch(response => {
      dispatch(receiveLoginError(response.data));
    });
  };
}

export function signup(email, password) {
  return function(dispatch) {
    dispatch(requestLogin());
    return api.post("api/auth/signup", {
      email,
      password
    })
    .then(response => {
      dispatch(receiveLogin(response.data));
      authenticate(response.data.token)(dispatch);
    })
    .catch(response => {
      console.log(response.response.data.message);
      dispatch(receiveLoginError(response.response.data));
    });
  };
}

export function logout(email, password) {
  return function(dispatch) {
    localStorage.removeItem("token");
    dispatch({
      type: "COMPANY_FULFILLED",
      data: null
    })
    dispatch(requestLogout());
    return api.get("api/auth/logout", {
      email,
      password
    })
    .then(response => {
      dispatch(receiveLogout(response.data));
    })
    .catch(response => {
      dispatch(receiveLogoutError(response.data));
    });
  };
}
