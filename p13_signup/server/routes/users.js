
// import express
import express from "express";

//
import commonValidations from "../shared/validations/signup";

//
import bcrypt from "bcrypt";

//
import User from "../models/user";

//
import Promise from "bluebird";

//
import isEmpty from "lodash/isEmpty";


// so express has router
let router = express.Router();


function validateInput(data, passedValidation) {
  
  // most of them checking not empty
  let { errors } = passedValidation(data);
  
  // Yes, return this promise.............
  // http://bookshelfjs.org/
  return User.query({
    where: {email: data.email}, 
    orWhere: {username: data.username}
  })
  .fetch()
  .then((user) => {
    // the error is different from the shared one
    if(user) {
      if(user.get("email") === data.email) {
        // The error will display to client
        errors.email = "Same email already exists"; 
      }
    }
    
    //  
    if(user.get("username") === data.username) {
      // The error will display to client
      errors.username = "Same username already exists"; 
    }
    
    // this return is ...
    return {
      // This matches "../shared/validations/signup"
      errors,
      isValid: isEmpty(errors)
    }
  });
  
  /*
  return Promise.all([
    // http://bookshelfjs.org/#Model-instance-fetch
    User.where("email", data.email).fetch().then(user => {
      // the error is different from the shared one
      if(user) { 
        // The error will display to client
        errors.email = "Same email already exists"; 
      }
    }),

    User.where("username", data.username).fetch().then(user => {
      // the error is different from the shared one
      if(user) { 
        // The error will display to client
        errors.username = "Same username already exists"; 
      }
    })
  
  ]).then(() => {
  
    //test
    console.log("-------- in validateInput ---------");
    console.log(errors);
  
    return {
      // This matches "../shared/validations/signup"
      errors,
      isValid: isEmpty(errors)
    }
  });
  */  


}


// here we define one of them, post, get, delete, put
// you cannot do post.get
// router handle post
// it use "/", because when we use app.use("/api/users")
router.post("/", (req, res) => {
  
  validateInput(req.body, commonValidations).then(
    // errors or is valid
    ({ errors, isValid }) => {
    
      // not valid
      if(isValid) {
        const {username, email, password, timezone} = req.body;
        
        // 10 is the salt
        // basically sending a combinaiton of things to server.
        var password_digest = bcrypt.hashSync(password, 10);
        
        // User forge === new User
        //https://blog.ragingflame.co.za/2014/12/16/building-a-simple-api-with-express-and-bookshelfjs
        User.forge({
          username: username,
          email: email,
          timezone: timezone,
          password_digest: password_digest
        }, {hasTimestamps: true})
        .save()
        .then(function (user) {
          res.json({success: true});
        })
        .catch(function (err) {
          res.status(500).json({error: err});
        }); 
        
      }
      else {
        //test
        console.log("--- in router post, error ---");
        console.log(errors);
      
        // post back errors, 400 error
        res.status(400).json(errors);
      }
    
      
    
    }
  );
  
  
  
});

export default router;

