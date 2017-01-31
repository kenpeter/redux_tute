import axios from "axios";

export function login(data) {
  return dispatch => {
    return axios.get("/api/auth", data);
  }
}


