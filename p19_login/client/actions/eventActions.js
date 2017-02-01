import { CREATE_EVENT } from "./types";

export function createEvent(data) {
  
  return { 
    type: CREATE_EVENT, 
    "data": data
  }
}

