const ACTION_TYPE = "COMPANY";

export default (state = {
  company: null,
  loading: false
}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {
        company: null,
        loading: true
      };

    case `${ACTION_TYPE}_FULFILLED`:
    console.log(action.data);
      return {
        loading: false,
        company: action.data
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        company: null,
        error: action.data
      };

    default:
      return state;
  }
};
