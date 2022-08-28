var express = require('express');
var router = express.Router();
var userCtrl = require('../../controller/admin/userController');

router.get('', userCtrl.login);
router.post('', userCtrl.postLogin);
module.exports = router;

