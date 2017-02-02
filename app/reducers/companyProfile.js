const ACTION_TYPE = 'GET_COMPANY';

export default (state = {company:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {company:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        company: action.payload.data
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        company: null,
        error: action.payload
      };

    default: return state;
  }
}
