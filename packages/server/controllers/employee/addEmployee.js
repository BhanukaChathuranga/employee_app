const EmployeeModel = require('../../modal/employee');

module.exports = addEmployee = async (req, res) => {
    const data = req.body;
    console.log(req.body);
    const randomNo = Math.round(Math.random() * 100)
    const employee = { ...data, photo: `https://randomuser.me/api/portraits/men/${randomNo}.jpg` };
    const emp = new EmployeeModel(employee);

    try {
        await emp.save();
        console.log(emp)
        res.status(201).json(emp);

    } catch (error) {
        console.log('', error);
        res.status(500).json(error);
    }
}
