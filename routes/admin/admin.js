var express = require("express");
var router = express.Router();
var adminCtrl = require("../../controller/admin/adminController");
var mw = require("../../Middleware/admin");

router.get("", mw.hasLogin, adminCtrl.index);
module.exports = router;
