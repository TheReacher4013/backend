const Employee = require("../models/Employee");

//create employee 
exports.createEmployee = async (req, res) => {
    try {
        const emp = await Employee.create(req.body);
        res.status(201).json(emp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//get All employees
exports.getEmployees = async (req, res) => {
    try {
        const list = await Employee.find().populate("userId");
        res.json(list);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};
//get single employee
exports.getEmployee = async (req, res) => {
    try {
        const emp = await Employee.findById(req.params.id).populate("userId");
        if (!emp) return res.status(404).json({ msg: "Not found" });
        res.json(emp);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })

    }
};
//updated by id
exports.updateEmployee = async (req, res) => {
    try {
        const emp = await Employee.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true }
        );
        res.json(emp);
    } catch (err) {
        res.status(500).json({
            error: err.message
        })

    }
};

//delete Employee
exports.deleteEmployee = async (req, res) => {
    try {
        const emp = await Employee.findByIdAndDelete(req.params.id);
        req.json({ msg: "Employee deleted" });
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
};