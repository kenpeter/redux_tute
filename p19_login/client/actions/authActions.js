import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";
import { SET_CURRENT_USER } from "./types";


// can be reused here.
// we don't care too much about current state.
export function setCurrentUser(userData) {
  return { 
    type: SET_CURRENT_USER, 
    "user": userData // note user is not really a user {id: xxx, username: a, iat: xxxxxx}
  }
}


// as you can see here, action here do lots of things
// when do we return the action???????
// actually, we don't fire action here, need to set up another one
export function login(data) {
  return dispatch => {
    return axios.post("/api/auth", data).then((res) => {
      
      //test
      console.log("--- in login(data) ---");
      // get token
      const token = res.data.token;
      
      // local storage
      // set item
      localStorage.setItem('jwtToken', token);
      
      // set it or remove token to local storage
      setAuthorizationToken(token);
      
      console.log("--- in login(data) ---");
      
      // self dispatch, some reducer will catch it?
      // jwt uses something with net and dns
      // need to cancel in webpack
      // need to restart
      // jwt.decode(token) contains id and user
      dispatch( setCurrentUser(jwt.decode(token)) );      
    });
  }
}


export function logout() {
  return dispatch => {
    // no return
    console.log("--- in authAction.js, logout ------");

    // remove local storage
    localStorage.removeItem('jwtToken');
      
    setAuthorizationToken(false);
  
    /*
      return {
        isAuthenticated: !isEmpty(action.user), // not empty user, then authed.
        user: action.user // {id: xxx, username: a, iat: xxxxxx}
      }
    */  
    dispatch( setCurrentUser({}) );
  };

  
      
      
}

