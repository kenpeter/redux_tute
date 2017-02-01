import axios from "axios";

export function createEvent(event) {
  // dispatch
  return dispatch => {
    // axios post
    // api url
    // event
    return axios.post("/api/events", event);
  };
}


