var express = require("express");
var router = express.Router();
var prdCtrl = require("../../controller/admin/productController");
var mw = require("../../Middleware/admin");
/* GET home page. */
router.get("", mw.hasLogin, prdCtrl.getlist);
router.get("/del/:id", mw.hasLogin, prdCtrl.deleteProduct);
router.get("/edit/:id", mw.hasLogin, prdCtrl.getProductEdit);
router.post("/edit/done", mw.hasLogin, prdCtrl.editProduct);
router.get("/addproduct", mw.hasLogin, prdCtrl.getPage);
router.post("/addproduct", mw.hasLogin, prdCtrl.insertProduct);
router.get("/category", mw.hasLogin, prdCtrl.getPageCategory);
router.post("/category", mw.hasLogin, prdCtrl.insertCategory);
router.post("/upload", mw.hasLogin, prdCtrl.upload);
router.get("/upload/:id", mw.hasLogin, prdCtrl.getpageupload);
router.get("/deleteimg/:id", mw.hasLogin, prdCtrl.deleteimg);
module.exports = router;
