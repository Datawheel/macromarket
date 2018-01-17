export function updateSlideOverlay(slideNumber) {
  return {type: "ONBOARDING_OVERLAY_SLIDE_UPDATE", data: slideNumber};
}

export function toggleOverlay() {
  return {type: "ONBOARDING_OVERLAY_TOGGLE"};
}
