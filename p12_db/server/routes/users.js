
// import express
import express from "express";

//
import validateInput from "../shared/validations/signup";

//
import bcrypt from "bcrypt";

//
import User from "../models/user";

// so express has router
let router = express.Router();


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
      
      //test
      //console.log("--- router post, good ---");
    
      //
      //res.status(200).json({success: true});
    }
    else {
      //test
      console.log("--- router post, error ---");
      console.log(errors);
    
      // post back errors
      res.status(400).json(errors);
    }
  
  }, 0);
  
});

export default router;

