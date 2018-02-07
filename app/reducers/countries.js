const ACTION_TYPE = "COUNTRIES";

export default (state = {countries:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {countries:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        countries: action.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        countries: null,
        error: action.data
      };
    default: return state;
  }
}
