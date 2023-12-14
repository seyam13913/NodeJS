const express = require("express");
const customer = express.Router();

customer.get("/find", (req, res) => {
  const id = req.header("id");
  const age = req.header("age");
  const ok = req.headers;
  console.log(ok);

  console.log(req.url);
  console.log(req.baseUrl);

  console.log("userId", id);
  console.log("userAge", age);
  res.send(`<h1>Student Id is : ${id}, age is : ${age}</h1>`);
});

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
