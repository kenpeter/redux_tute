import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user";

// export default (req, res, next) => {}
export default function(req, res, next) {
  // const
  // req
  // .headers
  // array
  // "authorization"
  const authorizationHeader = req.headers["authorization"];
  let token;
  
  if (authorizationHeader) {
  
  }
}
