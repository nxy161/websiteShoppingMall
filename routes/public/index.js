var express = require('express');
var router = express.Router();
var homeCtrl = require("../../controller/public/home");
/* GET home page. */
router.get('/', homeCtrl.index);
router.get('/index.html', homeCtrl.index);

module.exports = router;
