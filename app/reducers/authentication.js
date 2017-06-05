export default (state = {
  user: null,
  loading: false,
  msg: null,
  updatedUser: null,
  error: null
}, action) => {
  switch (action.type) {
    case "SAVE_USER_FULFILLED":
      return { ...state,
        updatedUser: action.data,
      };
    case "SAVE_USER_REJECTED":
      return { ...state,
        error: action.data
      };
    case "LOG_OUT_PENDING":
    case "AUTH_PENDING":
      return { ...state,
        loading: true,
        error: null
      };
    case "SIGN_UP_PENDING":
    case "LOG_IN_PENDING":
      return { ...state,
        user: null,
        loading: true
      };
    case "AUTH_FULFILLED":
    case "SIGN_UP_FULFILLED":
    case "LOG_IN_FULFILLED":
      return { ...state,
        loading: false,
        error: null,
        user: action.data
      };
    case "AUTH_REJECTED":
    case "LOG_OUT_REJECTED":
    case "SIGN_UP_REJECTED":
    case "LOG_IN_REJECTED":
    console.log("HERE ");
      return { ...state,
        loading: false,
        user: null,
        error: action.data.message
      };
    case "LOG_OUT_FULFILLED":
      return { ...state,
        loading: false,
        error: null,
        msg: action.data,
        user: null
      };
    default:
      return state;
  }
};
