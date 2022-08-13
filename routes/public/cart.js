var express = require('express');
var router = express.Router();
var cartCtrl = require('../../controller/public/cartController');

router.get('', cartCtrl.cart);
module.exports = router;

