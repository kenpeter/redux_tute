import { CREATE_EVENT } from "../actions/types";

const initState = {
  
};

export default function event(state = initState, action = {}) {
  switch(action.type) {
    case CREATE_EVENT:
      console.log("---- in reducer, event.js, func event -----");
      return state;
      
    default:
      return state;
  }
}
