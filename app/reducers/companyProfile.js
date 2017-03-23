const ACTION_TYPE = "COMPANY";

export default (state = {
  company: null,
  loading: false,
  authComapny: null,
}, action) => {
  switch (action.type) {
    case "COMPANY_PENDING":
      return {
        company: null,
        loading: true
      };

    case "COMPANY_FULFILLED":
      return {
        loading: false,
        company: action.data
      };
    case "COMPANY_AUTH_FULFILLED":
      return {
        loading: false,
        authCompany: action.data
      };
    case "COMPANY_REJECTED":
      return {
        loading: false,
        company: null,
        error: action.data
      };
    case "DELETE_PENDING":
      return {
        authCompany: action.data,
        loading: true,
        deleted: false
      };
    case "DELETE_FULFILLED":
      return {
        loading: false,
        authCompany: null,
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
