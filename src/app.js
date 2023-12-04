const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");
const customer = require("./routes/customer.route");

app.use("/api/user/", userRouter);

app.use("/api/user/customer", customer);

app.use((req, res) => {
  res.send("<h1>404 !!! not a valid url</h1>");
});

module.exports = app;
