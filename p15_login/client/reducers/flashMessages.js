import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "../actions/types";
import shortid from "shortid";
import findIndex from "lodash/findIndex";

// export
// default
// why state is empty array????????????????
// Because we have a series of states..........
//
// action is obj is easy
// another way is export default (state=[], action={}) => {}
export default function flashMessages(state = [], action = {}) {
  switch(action.type) {
    
    // here we add flash message to state
    case ADD_FLASH_MESSAGE:
      // WHAT HAPPEN AFTER A NEW STATE RETURNED????????????
      // return new state
      // orig state is array
      return [
        // old state
        ...state,
        
        // define message prop
        // reducer must know all props
        // id
        // type
        // text
        {
          id: shortid.generate(),
          type: action.message.type, 
          text: action.message.text
        }
      ];
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, {id: action.id});
      
      // test
      console.log("------- test, delete msg------");
      console.log(index);
      
      if(index >= 0) {
        let return_state = [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ];
        
        return return_state;
      }
      
      return state;
      
    default:
      return state;
  }
}
