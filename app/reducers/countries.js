const ACTION_TYPE = 'GET_COUNTRIES';

export default (state = {countries:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {countries:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        countries: action.payload.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        countries: null,
        error: action.payload
      };
    default: return state;
  }
}
