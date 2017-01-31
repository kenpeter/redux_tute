import axios from "axios";

// React submits form
// * click a component on component
// * call a function from actons
// * action calls the remote api
// 
//
// so action just another function
// export func
// user signup request
// user data
export function userSignupRequest(userData) {
  // userData is the data we want to preserve
  // userSignupRequest is closure.
  // where is dispatch coming from????????????????????????
  return dispatch => {
    // axios
    // post
    // url: /api/users
    // when we post here /api/users, it matching up the server route
    // which is /server/routes/users.js
    return axios.post("/api/users", userData);
  }
}


export function isUserExist(identifier) {
  return dispatch => {
    return axios.get(`/api/users/${identifier}`);
  }
}


