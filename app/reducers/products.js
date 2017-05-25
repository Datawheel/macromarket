export default (state = {
  products: null,
  productsForSearch: null,
  loading: false
}, action) => {
  switch (action.type) {
    case "PRODUCTS_PENDING":
      return {...state,
        products: null,
        loading: true
      };
    case "SEARCH_PRODUCTS_PENDING":
      return {...state,
        productsForSearch: null,
        loading: true
      };
    case "PRODUCTS_FULFILLED":
      return {...state,
        loading: false,
        products: action.data
      };
    case "SEARCH_PRODUCTS_FULFILLED":
      return {...state,
        productsForSearch: action.data,
        loading: false
      };
    case "PRODUCTS_REJECTED":
      return {...state,
        loading: false,
        products: null,
        error: action.data
      };
    case "SEARCH_PRODUCTS_REJECTED":
      return {...state,
        productsForSearch: null,
        loading: false,
        error: action.data
      };
    default:
      return state;
  }
};
