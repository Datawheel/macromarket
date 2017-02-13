export default (state = {
  user: null,
  loading: false,
  token: localStorage.getItem("token"),
  msg: null
}, action) => {
  switch (action.type) {
    case "AUTH_PENDING":
      return Object.assign({}, state, {
        loading: true,
        error: null,
        token: null
      });
    case "SIGN_UP_PENDING":
    case "LOG_IN_PENDING":
      return Object.assign({}, state, {
        user: null,
        loading: true
      });
    case "SIGN_UP_FULFILLED":
    case "LOG_IN_FULFILLED":
      return Object.assign({}, state, {
        loading: false,
        error: null,
        token: action.data.token
      });

    case "AUTH_FULFILLED":
      return Object.assign({}, {
        loading: false,
        error: null,
        user: action.data.user
      });
    case "AUTH_REJECTED":
    case "SIGN_UP_REJECTED":
    case "LOG_IN_REJECTED":
    console.log(action.data);
      return Object.assign({}, state, {
        loading: false,
        token: null,
        user: null,
        error: action
      });
    case "LOG_OUT_FULFILLED":
      return Object.assign({}, state, {
        loading: false,
        error: null,
        msg: action.data,
        token: null,
        user: null
      });
    default:
      return state;
  }
};
