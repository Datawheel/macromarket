import axios from "axios";

function requestSearch() {
  return {
    type: "SEARCH_PENDING"
  };
}

function receiveSearch(json) {
  return {
    type: "SEARCH_FULFILLED",
    data: json
  };
}

export function toggleSearch() {
  return {
    type:"TOGGLE_SEARCH"
  };
}


export function fetchSearch(query) {
  return function(dispatch) {
    dispatch(requestSearch());
    return axios.get(`/api/search/${query}`)
    .then(response => {
      dispatch(receiveSearch(response.data));
    })
    .catch(response => {
      console.log(response);
    });
  };
}
