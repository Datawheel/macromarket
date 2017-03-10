const ACTION_TYPE = "SEARCH";

export default (state = {
  results: null,
  loading: false,
  visible: false
}, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCH":
      return {
        visible: !state.visible
      };
    case `${ACTION_TYPE}_PENDING`:
      return {
        results: null,
        loading: true,
        visible: true
      };

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        results: action.data,
        visible: true
      };
    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        results: null,
        error: action.data
      };
    default:
      return state;
  }
};
