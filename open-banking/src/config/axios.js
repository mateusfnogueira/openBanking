import axios from "axios";

const $http = axios.create({
  baseURL: 'http://localhost:3000/'
})


export const api = {

  get(endpoint) {
    return $http.get(endpoint);
  },

  post(endpoint, user) {
    return $http.post(endpoint, user);
  }
}

