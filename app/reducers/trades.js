const ACTION_TYPE = "TRADES";

export default (state = {trades: null, loading: false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {trades: null, loading: true};
    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        trades: action.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        trades: null,
        error: action.data
      };
    default: return state;
  }
};
