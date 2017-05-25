export default (state = {
  company: null,
  loading: false,
  deleted: false,
  error: null
}, action) => {
  switch (action.type) {
    case "SAVE_PENDING":
      return { ...state,
        company: null,
        loading: true,
        deleted: false
      };
    case "SAVE_FULFILLED":
      return { ...state,
        loading: false,
        company: action.data,
        deleted: false
      };
    case "SAVE_REJECTED":
      return { ...state,
        loading: false,
        company: null,
        deleted: false,
        error: action.data
      };
    case "DELETE_PENDING":
      return { ...state,
        company: action.data,
        loading: true,
        deleted: false
      };
    case "DELETE_FULFILLED":
      return { ...state,
        loading: false,
        company: null,
        deleted: true
      };
    case "DELETE_REJECTED":
      return { ...state,
        loading: false,
        error: action.data,
        deleted: false
      };
    default:
      return state;
  }
};
