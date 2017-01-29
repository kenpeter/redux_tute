// the types.js has many constant.
import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from "./types";


// one of the export
// http://redux.js.org/docs/basics/Actions.html
// The typical action is a func
// it returns action type and payload
export function addFlashMessage(message) {
  // This obj is Action..............
  return { 
    type: ADD_FLASH_MESSAGE, 
    "message": message
  }
}


export function deleteFlashMessage(messageId) {
  // This obj is Action..............
  return { 
    type: DELETE_FLASH_MESSAGE, 
    "id": messageId
  }
}
