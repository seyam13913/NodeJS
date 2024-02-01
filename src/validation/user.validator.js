const { check } = require("express-validator");

const registerUserValidator = [
  check("name").trim().notEmpty().withMessage("Name is missing"),
  check("email").trim().notEmpty().isEmail().withMessage("Email is missing"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters long"),
  check("dob")
    .trim()
    .notEmpty()
    .withMessage("Date of birth is missing")
    .isISO8601()
    .toDate()
    .withMessage("Date of birth is invalid"),
];

const userLoginValidator = [
  check("email").trim().notEmpty().isEmail().withMessage("Email is missing"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Password is missing")
    .isLength({ min: 4 })
    .withMessage("Password must be at least 4 characters long"),
];

module.exports = { registerUserValidator, userLoginValidator };
