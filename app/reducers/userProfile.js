const ACTION_TYPE = 'GET_USER';

export default (state = {user:null, loading:false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {user:null, loading:true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        user: action.payload.data
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        user: null,
        error: action.payload
      };

    default: return state;
  }
}
