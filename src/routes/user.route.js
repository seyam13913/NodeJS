const express = require("express");

// controllers imports
const {
  registerUserController,
  registerUserLogin,
} = require("../controllers/user.controller");

// validation imports
const {
  registerUserValidator,
  userLoginValidator,
} = require("../validation/user.validator");
const { runValidation } = require("../validation");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("I am a get request at Home route.");
});

router.post(
  "/register",
  registerUserValidator,
  runValidation,
  registerUserController
);

router.post("/login", userLoginValidator, runValidation, registerUserLogin);

module.exports = router;
