import { ADD_FLASH_MESSAGE } from "../actions/types";

import shortid from "shortid";

// export
// default
// why state is empty array????????????????
// action is obj is easy
export default (state = [], action = {}) => {
  switch(action.type) {
    case ADD_FLASH_MESSAGE:
      // return new state
      // orig state is array
      return [
        ...state,
        {
          id: shortid.generate(),
          type: action.message.type, 
          text: action.message.text
        }
      ];
    default:
      return state;
  }
}
