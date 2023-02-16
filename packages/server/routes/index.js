var express = require('express');
var router = express.Router();

const employee = require('./employee');

router.use('/employee', employee);

module.exports = router;

