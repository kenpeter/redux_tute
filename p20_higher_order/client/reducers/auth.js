import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "lodash/isEmpty";

const initState = {
  isAuthenticated: false, // not auth default
  user: {} // of course, empty user
};

// we use action and whatever state we have to build new state
// so whose state is this????????????????????
export default function auth(state = initState, action = {}) {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: !isEmpty(action.user), // not empty user, then authed.
        user: action.user // {id: xxx, username: a, iat: xxxxxx}
      }
      
    default:
      return state;
  }
}
