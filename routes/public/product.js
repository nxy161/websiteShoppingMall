var express = require("express");
var router = express.Router();
var prdCtrl = require("../../controller/public/product");
/* GET home page. */
router.get("/category/:id", prdCtrl.getCategories);
router.get("/detail/:id", prdCtrl.getProductDetail);

module.exports = router;
