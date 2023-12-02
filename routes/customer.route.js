const express = require("express");
const customer = express.Router();

customer.get("/users", (req, res) => {
  res.send("<h2>Hello, I'm new customer.</h2>");
});

customer.post("/post", (req, res) => {
  res.send("<h1>Hello, I am Created.</h1>");
});

customer.put("/put", (req, res) => {
  res.send("My profile fully successful update");
});

customer.patch("/patch", (req, res) => {
  res.send("My name successful is change.");
});

customer.delete("/delete/:customerId", (req, res) => {
  console.log(req.params.customerId);
  res.send({
    name: "seyam",
    age: 24,
  });
});

module.exports = customer;
