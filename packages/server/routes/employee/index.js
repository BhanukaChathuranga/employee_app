var express = require('express');
var router = express.Router();

const { getEmployee, addEmployee, updateEmployee, deleteEmployee } = require('../../controllers/employee');

router.get('/', getEmployee);
router.post('/', addEmployee);
router.put('/:empId', updateEmployee);
router.delete('/:empId', deleteEmployee);

module.exports = router;
