var express = require("express");
var router = express.Router();
var mw = require("../../Middleware/admin");
var voucherCtrl = require('../../controller/admin/voucherController');
router.get('', voucherCtrl.getList);
router.get('/add', voucherCtrl.getPageAdd);
router.post('/add', voucherCtrl.addVoucher);
router.get('/del/:id', voucherCtrl.deleteVoucher);
module.exports = router;
