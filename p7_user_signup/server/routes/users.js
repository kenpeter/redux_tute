
// import express
import express from "express";

// validator
import Validator from "validator";

// lodash
import isEmpty from "lodash/isEmpty";


// so express has router
let router = express.Router();


function validateInput(data) {
  // init errors emtpy obj  
  let errors = {};


  // username not empty
  if(Validator.isNull(data.username)) {
    errors.username = "This field is required";
  }

  // email not empty
  // call validator
  // is null
  // data === req.body
  // data.email
  if(Validator.isNull(data.email)) {
    // set up obj.prop = assign msg
    errors.email = "This field is required";
  }
  
  // need to be email
  if(!Validator.isEmail(data.email)) {
    // set up obj.prop = assign msg
    errors.email = "Need to be email";
  }
  
  
  // password not empty
  if(Validator.isNull(data.password)) {
    errors.password = "This field is required";
  }
  
  // password confirm not empty
  if(Validator.isNull(data.passwordConfirm)) {
    errors.passwordConfirm = "This field is required";
  }
  
  // password === password confirm
  if(!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = "Password must match";
  }
  
  
  // time zone not empty
  if(Validator.isNull(data.timezone)) {
    errors.timezone = "This field is required";
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

// here we define one of them, post, get, delete, put
// you cannot do post.get
// router handle post
// it use "/", because when we use app.use("/api/users")
router.post("/", (req, res) => {
  
  // set time out to show button will be disabled for a while.
  setTimeout(() => {
    // It seem req.body is very important;
    
    // destructor
    const { errors, isValid } = validateInput(req.body);

    // not valid
    if(!isValid) {
    
      //test
      console.log("--- form input error ---");
      console.log(errors);
    
      // post back errors
      res.status(400).json(errors);
    }
  
  }, 0);
  
});

export default router;

