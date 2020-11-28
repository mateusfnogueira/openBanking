import axios from "axios";

const $http = axios.create({
  baseURL: 'http://localhost:2120/'
})


export const api = {
  get(url) {
    return $http.get(url)
  }
}

