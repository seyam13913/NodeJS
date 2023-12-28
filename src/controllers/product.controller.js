const path = require("path");

const products = require("../models/product.model");

exports.productPage = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.findProduct = (req, res) => {
  const find = products.find((val) => val.id === Number(req.params.id));

  res.send(find);
};
