const express = require("express");

const customer = express.Router();

customer.get("/find", (req, res) => {
  const id = req.header("id");
  const age = req.header("age");

  res.send(`<h1>Student Id is : ${id}, age is : ${age}</h1>`);
});

customer.get("/users", (req, res) => {
  res.send("<h2>Hello, I'm new customer.</h2>");
});

customer.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.send(`<h1>Hello, I am ${name}.I am ${age} year old.</h1>`);
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
