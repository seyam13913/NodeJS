const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("I am a get request at Home route.");
});

router.get("/register", (req, res) => {
  res.send("I am a get request at Register route.");
});

router.get("/login", (req, res) => {
  res.send("I am a get request at Login router");
});

module.exports = router;
