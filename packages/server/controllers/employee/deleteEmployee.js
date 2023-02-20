const EmployeeModel = require('../../modal/employee');

module.exports = deleteEmployee = async (req, res) => {
    const id = req.params.empId
    try {
        const employee = await EmployeeModel.deleteOne({ id: id });
        console.log(employee)
        res.status(201).json(employee);

    } catch (error) {
        console.log('', error);
        res.status(500).json(error);
    }
}
