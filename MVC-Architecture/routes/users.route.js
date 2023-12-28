const express = require("express");

const {
  getRegisterPage,
  saveUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/", getRegisterPage);

router.post("/register", saveUser);

module.exports = router;
