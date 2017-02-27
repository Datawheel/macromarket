export default (state = {
  company: null,
  loading: false,
  deletedd: false
}, action) => {
  switch (action.type) {
    case "SAVE_PENDING":
      return {
        company: null,
        loading: true,
        deleted: false
      };
    case "SAVE_FULFILLED":
      return {
        loading: false,
        company: action.data,
        deleted: false
      };
    case "SAVE_REJECTED":
      return {
        loading: false,
        company: null,
        deleted: false
      };
    case "DELETE_PENDING":
      return {
        company: action.data,
        loading: true,
        deleted: false
      };
    case "DELETE_FULFILLED":
      return {
        loading: false,
        company: null,
        deleted: true
      };
    case "DELETE_REJECTED":
      return {
        loading: false,
        error: action.data,
        deleted: false
      };
    default:
      return state;
  }
};
