const express = require("express");

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

const route = express.Router();

// users get route
route.get("/", getAllUsers);

// create user route
route.post("/", createUser);

// user update route
route.put("/:id", updateUser);

// delete user route
route.delete("/:id", deleteUser);

module.exports = route;
