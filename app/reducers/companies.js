const ACTION_TYPE = "COMPANIES";

export default (state = {companies: null, loading: false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {companies: null, loading: true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        companies: action.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        companies: null,
        error: action.data
      };
    default: return state;
  }
};
