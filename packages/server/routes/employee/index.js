var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

const { userSchema } = require('../../modal/user');

router.get('/', (req, res) => {
    const Users = mongoose.model("Employees", userSchema);
    Users.find().then(user => {
        console.log(user)
        res.json(user)
    })
});
router.post('/');
router.put('/:empId');
router.delete('/:empId');

module.exports = router;
