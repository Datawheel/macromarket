import axios from "axios";

export function login(email, password) {
  const request = axios.post('/api/login', {
    email: email,
    password: password
  });

  return {
    type: 'LOG_IN',
    payload: request
  };
}
