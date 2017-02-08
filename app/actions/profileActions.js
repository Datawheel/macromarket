import axios from "axios";

export function fetchUser(id) {
  const request = axios.get(`/api/profile`)

  return {
    type:'GET_USER',
    payload: request
  };
}
