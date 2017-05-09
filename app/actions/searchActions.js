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

export function setSearch(json) {
  return {
    type: "SET_SEARCH",
    data: json
  };
}


export function fetchSearch(query, filter) {
  return function(dispatch) {
    dispatch(requestSearch());
    return axios.get(`/api/search/${filter}/${query}`)
    .then(response => {
      dispatch(receiveSearch(response.data));
    })
    .catch(response => {
      console.log(response);
    });
  };
}
