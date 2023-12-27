const express = require("express");
const userRouter = require("./routes/user.route");
const customer = require("./routes/customer.route");
const bodyPerser = require("body-parser");

const app = express();

const myMiddleware = (req, res, next) => {
  console.log("I am middleware");

  next();
};

app.use(bodyPerser.urlencoded({ extended: false }));

app.use(bodyPerser.json());

app.use(myMiddleware);

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

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
  console.log("your are allrady register");

  // res.send("hello");
  res.sendFile(__dirname + "/views/register.html");
});

app.get("/product/:id([0-9]{5})", (req, res) => {
  res.send(`<h2>ID =${req.params.id} </h2>`);
});

app.get("/product/:title([a-zA-z0-9]+)", (req, res) => {
  res.send(`<h2>Title : ${req.params.title}</h2>`);
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
  res.status(404).send({
    message: "Not a valid rout",
  });
  // res.send("<h1>404 !!! not a valid url</h1>");
});

module.exports = app;
