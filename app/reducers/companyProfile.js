const ACTION_TYPE = "COMPANY";

export default (state = {
  company: null,
  loading: false,
  authComapny: null,
}, action) => {
  switch (action.type) {
    case "COMPANY_PENDING":
      return {...state,
        company: null,
        loading: true
      };

    case "COMPANY_FULFILLED":
      return {...state,
        loading: false,
        company: action.data
      };
    case "COMPANY_AUTH_FULFILLED":
      return {...state,
        loading: false,
        authCompany: action.data
      };
    case "COMPANY_REJECTED":
      return {...state,
        loading: false,
        company: null,
        error: action.data
      };
    case "DELETE_PENDING":
      return {...state,
        authCompany: action.data,
        loading: true,
        deleted: false
      };
    case "DELETE_FULFILLED":
      return {...state,
        loading: false,
        authCompany: null,
        deleted: true
      };
    case "DELETE_REJECTED":
      return {...state,
        loading: false,
        error: action.data,
        deleted: false
      };

    default:
      return state;
  }
};
