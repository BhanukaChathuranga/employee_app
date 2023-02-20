const EmployeeModel = require('../../modal/employee');

module.exports = updateEmployee = async (req, res) => {
    const id = req.params.empId
    const { data } = req.body;
    console.log(data);
    try {
        const employee = await EmployeeModel.updateOne({ id: id }, data);
        console.log(employee)
        res.status(201).json(employee);

    } catch (error) {
        console.log('', error);
        res.status(500).json(error);
    }
}
