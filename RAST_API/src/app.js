const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const route = require("./routes/users.route");

const app = express();

// app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello i'm home rout");
});

app.use("/users", route);

app.use((req, res, next) => {
  res.status(404).send({
    message: "Not a valid rout!",
  });
});

module.exports = app;
