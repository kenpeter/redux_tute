import axios from "axios";

// so action just another function
// export func
// user signup request
// user data
export function userSignupRequest(userData) {
  // userData is the data we want to preserve
  // userSignupRequest is closure.
  // where is dispatch coming from
  return dispatch => {
    return axios.post("/api/users", userData);
  }
}
