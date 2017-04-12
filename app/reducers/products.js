const ACTION_TYPE = "PRODUCTS";

export default (state = {
  products: null,
  loading: false
}, action) => {
  console.log(action.type);
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {
        products: null,
        loading: true
      };

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        products: action.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        products: null,
        error: action.data
      };
    default:
      return state;
  }
};
