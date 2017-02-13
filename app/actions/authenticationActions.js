import axios from "axios";
//
// export function authenticate() {
//   const request = axios.get("api/authenticate");
//   return {
//     type: "AUTHENTICATE",
//     payload: request
//   };
// }
//
// export function logIn(email, password) {
//   const request = axios.post("api/login", {
//     email,
//     password
//   });
//
//   return {
//     type: "LOG_IN",
//     payload: request
//   };
// }
//
// export function signUp(email, password) {
//   const request = axios.post("api/signup", {
//     email,
//     password
//   });
//
//   return {
//     type: "SIGN_UP",
//     payload: request
//   };
// }
//
// export function logOut() {
//   const request = axios.get("api/logout");
//   return {
//     type: "LOG_OUT",
//     payload: request
//   };
// }
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
    const config = {
      headers: {
        Authorization: `JWT ${token}`
      }
    };
    axios.get("/api/authenticate", config).then(response => {
      dispatch(receiveAuth(response.data));
    }, err => {
      console.log("ERROR!", err.response);
      dispatch(receiveAuthError(err));
    });
  };
}

export function login(email, password) {
  return function(dispatch) {

    dispatch(requestLogin());
    return axios.post("api/login", {
      email,
      password
    })
    .then(response => {
      localStorage.setItem("token", response.data.token);
      dispatch(receiveLogin(response.data));
      authenticate(response.data.token)(dispatch);
    })
    .catch(response => {
      dispatch(receiveLoginError(response.data));
    });
  };
}

export function signup(email, password) {
  return function(dispatch) {
    dispatch(requestLogin());
    return axios.post("api/signup", {
      email,
      password
    })
    .then(response => {
      localStorage.setItem("token", response.data.token);
      dispatch(receiveLogin(response.data));
      authenticate(response.data.token)(dispatch);
    })
    .catch(response => {
      dispatch(receiveLoginError(response.data));
    });
  };
}

export function logout(email, password) {
  return function(dispatch) {
    localStorage.removeItem("token");
    dispatch(requestLogout());
    return axios.get("api/logout", {
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
