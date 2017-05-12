export default (state = {
  user: null,
  loading: false,
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
    console.log(action.data, "LOG IN REDUCER");
      return {...state,
        loading: false,
        error: null,
        user: action.data
      };

    case "AUTH_FULFILLED":
      return {...state,
        loading: false,
        error: null,
        user: action.data
      };
    case "AUTH_REJECTED":
    case "LOG_OUT_REJECTED":
    case "SIGN_UP_REJECTED":
    case "LOG_IN_REJECTED":
      return {... state,
        loading: false,
        user: null,
        error: action.data.message
      };
    case "LOG_OUT_FULFILLED":
    console.log("logged out");
      return {... state,
        loading: false,
        error: null,
        msg: action.data,
        user: null
      };
    default:
      return state;
  }
};
