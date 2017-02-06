const ACTION_TYPE = 'GET_COMPANIES';

export default (state = {companies:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {companies:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        companies: action.payload.data
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        companies: null,
        error: action.payload
      };
    default: return state;
  }
}
