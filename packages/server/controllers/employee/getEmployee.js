const EmployeeModel = require('../../modal/employee');

module.exports = getEmployee = async(req, res) => {
   const employee = await EmployeeModel.find({});

    try {
        // console.log(employee);
        res.status(200).json(employee);
    } catch (error) {
        console.log('Employees get error : ',error);
        res.status(500).json(error);
    }
}
