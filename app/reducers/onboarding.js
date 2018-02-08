const ACTION_TYPE = "ONBOARDING_OVERLAY";

export default(state = {
  slideOverlayNumber: 0,
  isOverlayOpen: false,
  companySlug: "",
  product: null
}, action) => {
  switch (action.type) {

    case `${ACTION_TYPE}_SLIDE_UPDATE`:
      return {
        ...state,
        slideOverlayNumber: action.data
      };

    case `${ACTION_TYPE}_SET_COMPANY`:
      return {
        ...state,
        companySlug: action.data
      };

    case `${ACTION_TYPE}_SET_PRODUCT`:
      return {
        ...state,
        product: action.data
      };

    case `${ACTION_TYPE}_TOGGLE`:
      return {
        ...state,
        isOverlayOpen: !state.isOverlayOpen
      };

    default:
      return state;
  }
};
