const express = require("express");

const router = require("./routes/users.route");

const app = express();

const PORT = 3030;

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use((req, res, next) => {
  res.send("invalid route");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
