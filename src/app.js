const express = require("express");
const userRouter = require("./routes/user.route");
const customer = require("./routes/customer.route");
const bodyPerser = require("body-parser");

const app = express();

app.use(bodyPerser.urlencoded({ extended: false }));

app.use(bodyPerser.json());

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

// app.use("/register", (req, res) => {
//   res.statusCode = 200;
//   res.cookie("name", "SMJubaeair");
//   res.cookie("age", "20");
//   res.sendFile(__dirname + "/views/register.html");
// });

app.get("/register", (req, res) => {
  // res.send("hello");
  res.sendFile(__dirname + "/views/register.html");
});

app.post("/register", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.send(`<h2>Your Name is ${name} and Age is ${age} year old.</h2>`);

  // res.cookie("name");
  // res.append("id", "13913");
});

app.use("/logout", (req, res) => {
  res.send("I'm Logout form my Browser.");
});

app.use("/api/user", userRouter);

app.use("/api/user/customer", customer);

app.use((req, res) => {
  res.send("<h1>404 !!! not a valid url</h1>");
});

module.exports = app;
