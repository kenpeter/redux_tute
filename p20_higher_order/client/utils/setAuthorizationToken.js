import axios from "axios";

// export a function not a var
export default function setAuthorizationToken(token) {
  if(token) {
    // https://github.com/mzabriskie/axios
    //axios.defaults.headers.common['Authorization'] = token;
    // not correct, need to have Bearer
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  else {
    // cannot do axios.defaults.headers.common['Authorization'] = '';
    // need to delete
    delete axios.defaults.headers.common['Authorization'];
  }
}
