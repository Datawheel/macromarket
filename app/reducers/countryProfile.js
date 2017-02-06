const ACTION_TYPE = 'GET_COUNTRY';

export default (state = {country:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {country:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        country: action.payload.data
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        country: null,
        error: action.payload
      };

    default: return state;
  }
}
