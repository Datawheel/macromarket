export default (state = {
  trades: null,
  loading: false
}, action) => {
  switch (action.type) {
    case "DELETE_TRADES_PENDING":
    case "TRADES_PENDING":
      return {
        trades: null,
        loading: true
      };
    case "DELETE_TRADES_FULFILLED":
    case "TRADES_FULFILLED":
      return {
        loading: false,
        trades: action.data
      };
    case "DELETE_TRADES_REJECTED":
    case "TRADES_REJECTED":
      return {
        loading: false,
        trades: null,
        error: action.data
      };
    default:
      return state;
  }
};
