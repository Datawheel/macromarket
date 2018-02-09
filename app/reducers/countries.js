const ACTION_TYPE = "COUNTRIES";

export default (state = {countries: null, unnestedCountries: null, loading: false}, action) => {
  switch (action.type) {
    case `${ACTION_TYPE}_PENDING`:
      return {countries: null, loading: true};

    case `${ACTION_TYPE}_FULFILLED`:
      return {
        loading: false,
        countries: action.data.countries,
        unnestedCountries: action.data.unnestedCountries
      };

    case `${ACTION_TYPE}_REJECTED`:
      return {
        loading: false,
        countries: null,
        error: action.data
      };
    default: return state;
  }
};
