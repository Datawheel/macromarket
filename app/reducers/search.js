const ACTION_TYPE = "SEARCH";

export default (state = {
  results: null,
  loading: false,
  keyword: null,
  filter: null
}, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {...state,
        keyword: action.data.keyword,
        filter: action.data.filter
      };
    case `${ACTION_TYPE}_PENDING`:
      return {...state,
        results: null,
        loading: true,
        visible: true
      };

    case `${ACTION_TYPE}_FULFILLED`:
      return {...state,
        loading: false,
        results: action.data,
        visible: true
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {...state,
        loading: false,
        results: null,
        error: action.data
      };
    default:
      return state;
  }
};
