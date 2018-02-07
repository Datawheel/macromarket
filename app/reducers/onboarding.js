const ACTION_TYPE = "ONBOARDING_OVERLAY";

export default(state = {
  slideOverlayNumber: 1,
  isOverlayOpen: false,
  companyId: ""
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
        companyId: action.data
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
