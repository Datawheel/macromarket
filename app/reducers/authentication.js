import localForage from "localforage";

export default (state = {
  user: null,
  loading: false,
  token: localForage.getItem("token"),
  msg: null,
  error: null
}, action) => {
  switch (action.type) {
    case "LOG_OUT_PENDING":
    case "AUTH_PENDING":
      return {...state,
        loading: true,
        error: null
      };
    case "SIGN_UP_PENDING":
    case "LOG_IN_PENDING":
      return {...state,
        user: null,
        loading: true
      };
    case "SIGN_UP_FULFILLED":
    case "LOG_IN_FULFILLED":
      return {...state,
        loading: false,
        error: null,
        token: action.data.token
      };

    case "AUTH_FULFILLED":
      return {...state,
        loading: false,
        error: null,
        user: action.data.user
      };
    case "AUTH_REJECTED":
    case "LOG_OUT_REJECTED":
    case "SIGN_UP_REJECTED":
    case "LOG_IN_REJECTED":
      return {... state,
        loading: false,
        token: null,
        user: null,
        error: action.data.message
      };
    case "LOG_OUT_FULFILLED":
    console.log("logged out");
      return {... state,
        loading: false,
        error: null,
        msg: action.data,
        token: null,
        user: null
      };
    default:
      return state;
  }
};
