import express from "express";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import config from "../config";

let router = express.Router();

router.post("/", (req, res) => {
  
  const {identifier, password} = req.body;

  //console.log("--- in auth.js ------");
  //console.log(identifier);
  //console.log(password);
  
  return User.query({
    where: {email: identifier}, 
    orWhere: {username: identifier}
  })
  .fetch()
  .then((user) => {
    
    //test
    //console.log("--- in auth.js ------");
    //console.log(user);
    
    // so there is a user
    if(user) {
      if(bcrypt.compareSync(password, user.get("password_digest"))) {
        //console.log("password equal");
      
        let token = jwt.sign({
          //id: user.get("_id"),
          id: user.get("id"), // it is id, not _id, because it is not mongo
          username: user.get("username")
        }, config.jwtSecret);
        
        res.json(token);
        
        console.log("--- in auth.js ------");
        console.log(token);
      }
      else {
        console.log("--- in auth.js ------");
        console.log("password NOT equal");
      
        res.status(401).json({ errors: {form: "invalid credential"} });
      }
    }
    else {
      console.log("--- in auth.js ------");
        console.log("email or username not there");
      res.status(401).json({ errors: {form: "invalid credential"} });
    }
  });
});


export default router;
