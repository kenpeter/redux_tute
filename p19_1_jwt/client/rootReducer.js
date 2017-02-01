// so the root reducer combines other reducers
// https://github.com/reactjs/redux/blob/master/docs/api/combineReducers.md
import { combineReducers } from 'redux';

import flashMessages from "./reducers/flashMessages";
import auth from "./reducers/auth";
import event from "./reducers/event"; // once register to root reducer, able to see result.

// root reducer combined all reducers
export default combineReducers({
  flashMessages,
  auth,
  event
});
 
