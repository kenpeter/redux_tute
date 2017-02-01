import { CREATE_EVENT } from "../actions/types";

const initState = {
  
};

export default function dupEvent(state = initState, action = {}) {
  switch(action.type) {
    case CREATE_EVENT:
      console.log("---- in reducer, event.js, func dupEvent -----");
      return state;
      
    default:
      return state;
  }
}
