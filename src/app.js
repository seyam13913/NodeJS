const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");
const customer = require("./routes/customer.route");

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.cookie("name", "SMJubaeair");
  res.cookie("age", "20");
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
  res.clearCookie("name");
  res.append("id", "13913");
  res.send("Hi i'm Login page");
});

app.use("/logout", (req, res) => {
  res.send("I'm Logout form my Browser.");
});

app.use("/api/user/", userRouter);

app.use("/api/user/customer", customer);

app.use((req, res) => {
  res.send("<h1>404 !!! not a valid url</h1>");
});

module.exports = app;
