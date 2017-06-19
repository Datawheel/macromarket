import api from "../api.js";

function requestSaveUser() {
  return {
    type: "SAVE_USER_PENDING"
  };
}

function receiveSaveUser(json) {
  return {
    type: "SAVE_USER_FULFILLED",
    data: json
  };
}

function saveUserError(json) {
  return {
    type: "SAVE_USER_REJECTED",
    data: json
  };
}

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


export function isAuthenticated() {
  return function(dispatch) {
    dispatch(requestAuth());
    api.get("/api/auth/isAuthenticated", {
      withCredentials: true
    }).then(response => {
      if (response.data.msg) {
        dispatch(receiveAuthError(response.data.msg));
      } else {
        dispatch(receiveAuth(response.data));
      }
    }, err => {
      dispatch(receiveAuthError(err));
    });
  };
}

// logs user in and fetches the user's company if one exits
export function login(email, password) {
  return function(dispatch) {
    // required for sending receiving cookies
    const config = {
      withCredentials: true
    };
    dispatch(requestLogin());
    return api.post("api/auth/login", {
        email,
        password
      }, config)
      .then(response => {
        if (response.data.message) {
            dispatch(receiveLoginError(response.data));
        }
        else {
          if (response.data.company_id) {
            return api.get(`/api/companies/${response.data.company_id}`).then(companyResponse => {
              dispatch({
                type: "COMPANY_AUTH_FULFILLED",
                data: companyResponse.data
              });
            }).then(() => {
              dispatch(receiveLogin(response.data));
            });
          }
          dispatch(receiveLogin(response.data));
        }
      })
      .catch(response => {
        dispatch(receiveLoginError(response.data));
      });
  };
}

export function updateUser(id, email, password, newPassword) {
  // required for sending receiving cookies
  const config = {
    withCredentials: true
  };
  return function(dispatch) {
    dispatch(requestSaveUser());
    return api.post(`/api/auth/updateUser/${id}`, {
        email,
        password,
        newPassword
      }, config)
      .then(response => {
        dispatch(receiveSaveUser(response.data));
      })
      .catch(response => {
        dispatch(saveUserError("The password you entered is incorect."));
      });
  };
}

export function signup(email, password) {
  return function(dispatch) {
    // required for sending receiving cookies
    const config = {
      withCredentials: true
    };
    dispatch(requestLogin());
    return api.post("api/auth/signup", {
        email,
        password
      }, config)
      .then(response => {
        dispatch(receiveLogin(response.data));
      })
      .catch(response => {
        dispatch(receiveLoginError(response.response.data));
      });
  };
}

export function logout() {
  return function(dispatch) {
    dispatch({
      type: "COMPANY_FULFILLED",
      data: null
    });
    dispatch({
      type: "COMPANY_AUTH_FULFILLED",
      data: null
    });
    dispatch(requestLogout());
    return api.get("api/auth/logout", {
        withCredentials: true
      })
      .then(response => {
        dispatch(receiveLogout(response.data));
      })
      .catch(response => {
        dispatch(receiveLogoutError(response.data));
      });
  };
}
