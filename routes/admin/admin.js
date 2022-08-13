var express = require('express');
var router = express.Router();
var adminCtrl = require('../../controller/admin/admin');

router.get('', adminCtrl.admin);
module.exports = router;

