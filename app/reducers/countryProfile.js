const ACTION_TYPE = 'COUNTRY';

export default (state = {country:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {country:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        country: action.data
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        country: null,
        error: action.data
      };

    default: return state;
  }
}
