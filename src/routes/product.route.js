const express = require("express");

const {
  findProduct,
  productPage,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/product/page", productPage);

router.get("/product/:id", findProduct);

module.exports = router;
