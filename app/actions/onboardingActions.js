import api from "../api";

function updateSlideOverlay(json) {
  return {type: "ONBOARDING_OVERLAY_SLIDE_UPDATE", data: json};
}

function toggleOverlay() {
  return {type: "ONBOARDING_OVERLAY_TOGGLE"};
}
