// so the root reducer combines other reducers
// https://github.com/reactjs/redux/blob/master/docs/api/combineReducers.md
import { combineReducers } from 'redux';

import flashMessages from "./reducers/flashMessages";
import auth from "./reducers/auth";

// when using mapStateToProps, we can use state.flashMessages
// combine mutiple reducers as func
// pass object into combine reducers
export default combineReducers({
  flashMessages,
  auth
});
 
