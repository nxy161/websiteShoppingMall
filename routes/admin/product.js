var express = require("express");
var router = express.Router();
var prdCtrl = require("../../controller/admin/productController");
/* GET home page. */
router.get("", prdCtrl.getlist);
router.get("/del/:id", prdCtrl.deleteProduct);
router.get("/edit/:id", prdCtrl.getProductEdit);
router.post("/edit/done", prdCtrl.editProduct);
router.get("/addproduct", prdCtrl.getPage);
router.post("/addproduct", prdCtrl.insertProduct);
router.get("/category", prdCtrl.getPageCategory);
router.post("/category", prdCtrl.insertCategory);
router.post("/upload", prdCtrl.upload);
router.get("/upload/:id", prdCtrl.getpageupload);
router.get("/deleteimg/:id", prdCtrl.deleteimg);
module.exports = router;
