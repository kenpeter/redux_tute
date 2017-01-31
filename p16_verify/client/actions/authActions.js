import axios from "axios";

export function login(data) {
  return dispatch => {
    return axios.post("/api/auth", data).then((res) => {
      
      //test
      console.log("--- in login(data) ---");
      console.log(res);
    });
  }
}


