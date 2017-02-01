import express from "express";
import authenticate from "../middlewares/authenticate";

let router = express.Router();

// NOTE: so how to protect api url
// inject middleware to route
// then check it is jwt token.
// i.e. parse token, get user id, get user (exist or not exist)
//
// inject middleware in middle.
router.post("/", authenticate, (req, res) => {
  
  // 201 means newly created.
  res.status(201).json({ success: true });
});

//
export default router;
