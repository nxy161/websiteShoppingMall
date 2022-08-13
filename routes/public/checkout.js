var express = require("express");
var router = express.Router();
var checkoutCtrl = require("../../controller/public/invoiceController");
module.exports = router;


router.get("", checkoutCtrl.checkout);
router.post("",checkoutCtrl.createdInvoice);

router.get("/done",checkoutCtrl.done);