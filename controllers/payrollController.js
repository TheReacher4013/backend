const Payroll = require("../models/Payroll");

exports.createPayroll = async (req, res) => {
    try {
        const {
            Employeeid,
            Month,
            BaseSalary,
            Bonus,
            Deduction
        } = req.body;

        const NetSalary = BaseSalary + (Bonus || 0) - (Deduction || 0);

        const record = new Payroll({
            Employeeid,
            Month,
            BaseSalary,
            Bonus,
            Deduction,
            NetSalary
        });

        await record.save();

        res.status(201).json({
            message: "Payroll created",
            data: record
        });

    } catch (error) {
        res.status(500).json({
            message: "Error creating payroll",
            error: error.message
        });
    }
};


exports.getAllPayroll = async (req, res) => {
    try {
        const list = await Payroll.find();

        res.json(list);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching payroll",
            error: error.message
        });
    }
};

exports.getPayrollByEmployee = async (req, res) => {
    try {
        const { empid } = req.params;

        const data = await Payroll.find({ Employeeid: empid });

        res.json(data);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching employee payroll",
            error: error.message
        });
    }
};

exports.updatePayroll = async (req, res) => {
    try {
        const { id } = req.params;

        const updated = await Payroll.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.json({
            message: "Payroll updated",
            data: updated
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating payroll",
            error: error.message
        });
    }
};
exports.deletePayroll = async (req, res) => {
    try {
        const { id } = req.params;

        await Payroll.findByIdAndDelete(id);

        res.json({
            message: "Payroll deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: "Error deleting payroll",
            error: error.message
        });
    }
};
