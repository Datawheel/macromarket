import axios from "axios";

export function updateSlideOverlay(slideNumber) {
  return {type: "ONBOARDING_OVERLAY_SLIDE_UPDATE", data: slideNumber};
}

export function setOnboardingCompany(companySlug) {
  return {type: "ONBOARDING_OVERLAY_SET_COMPANY", data: companySlug};
}

export function setOnboardingProduct(product) {
  return {type: "ONBOARDING_OVERLAY_SET_PRODUCT", data: product};
}

export function toggleOverlay() {
  return {type: "ONBOARDING_OVERLAY_TOGGLE"};
}

export const onboardingSignup = userData => dispatch => {

  dispatch({type: "SIGNUP_REQUEST"});

  axios.post("/auth/local/signup", userData)
    .then(resp => {
      console.log("DATA: ", resp.data.user);
      dispatch({type: "SIGNUP_SUCCESS", payload: resp.data.user});
    })
    .then(() => {
      dispatch(updateSlideOverlay(1));
    })
    .catch(() => dispatch({type: "SIGNUP_FAILURE", payload: {type: "SIGNUP_EXISTS", payload: userData}}));

};

export const onboardingLogin = userData => dispatch => {

  dispatch({type: "LOGIN_REQUEST"});

  axios.post("/auth/local/login", userData)
    .then(resp => {
      dispatch({type: "LOGIN_SUCCESS", payload: resp.data.user});
    })
    .then(() => {
      dispatch(updateSlideOverlay(1));
    })
    .catch(() => dispatch({type: "LOGIN_FAILURE", payload: {type: "WRONG_PW", email: userData.email}}));

};
