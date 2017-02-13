const ACTION_TYPE = "GET_PRODUCTS";

export default (state = {
  products: null,
  loading: false
}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {
        products: null,
        loading: true
      };

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        products: action.payload.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        products: null,
        error: action.payload
      };
    default:
      return state;
  }
};
