var express = require('express');
var router = express.Router();
var adminCtrl = require('../../controller/admin/adminController');


router.get('',adminCtrl.index);
module.exports = router;