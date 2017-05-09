const ACTION_TYPE = "PRODUCT";

export default (state = {
  product: null,
  loading: false
}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {
        product: null,
        loading: true
      };

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        product: action.data
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        product: null,
        error: action.data
      };

    default:
      return state;
  }
};
