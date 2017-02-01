import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user";

// export default (req, res, next) => {}
export default function authenticate(req, res, next) {

  // const
  // req
  // .headers
  // array
  // "authorization"
  const authorizationHeader = req.headers["authorization"];
  let token;
  
  if (authorizationHeader) {
    // because the authroization header is: Bearer sdfdsf.sdfsdfdsf.sdfsdfsd
    token = authorizationHeader.split(" ")[1];
  }
  
  // we have token
  if(token) {
    // https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens
    jwt.verify(token, config.jwtSecret, function(err, decoded) {      
      if (err) {
      
        res.status(401).json({ error: 'Failed to authenticate token.' });    
      } else {
      
        // if everything is good, save to request for use in other routes
        let userId = decoded.id;
        
        //console.log("---- userId ----");
        //console.log(userId);
        
        
        User.query({
          where: { id: userId },
          select: ["id", "username", "email"] // need to be array, not obj
        })
        .fetch()
        .then((user) => {
          //console.log(user);
          
          if(!user) {
            // so we don't move to the next thing, stop here.
            res.status(404).json({ error: "user not exist"});      
          }
          else {
            req.currentUser = user;
            // move to next things   
            next();
          }
        });
        
        
        /*
        // just need user id
        req.userId = userId;
        next();
        */
      }
    });
  }
  else {
    // 403 means forbidden
    res.status(403).json({ error: "No valid token"});
  }
  
}
