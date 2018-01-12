import api from "../api";

function requestUpdateSlide() {
  return {type: "SLIDE_PENDING"};
}

function receiveUpdateSlide(json) {
  return {type: "SLIDE_FULFILLED", data: json};
}

function updateSlideError(json) {
  return {type: "SLIDE_REJECTED", data: json};
}
