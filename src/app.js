const express = require("express");
const userRouter = require("./routes/user.route");
const customer = require("./routes/customer.route");
const bodyPerser = require("body-parser");
const router = require("./routes/product.route");

const app = express();

const myMiddleware = (req, res, next) => {
  console.log("I am middleware");

  next();
};

app.use(bodyPerser.urlencoded({ extended: false }));

app.use(bodyPerser.json());

app.use(myMiddleware);

app.use(router);

app.use("/api/user", userRouter);

app.use("/api/user/customer", customer);

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/register", (req, res) => {
  console.log("your are allrady register");

  res.sendFile(__dirname + "/views/register.html");
});

app.post("/register", (req, res) => {
  res.sendFile(__dirname + "/views/login.html");
});

app.use((req, res) => {
  res.status(404).send({
    message: "Not a valid rout",
  });
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

module.exports = app;
