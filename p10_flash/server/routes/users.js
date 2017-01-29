
// import express
import express from "express";

//
import validateInput from "../shared/validations/signup";

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
      
      //test
      console.log("--- router post, good ---");
    
      //
      res.status(200).json({success: true});
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

