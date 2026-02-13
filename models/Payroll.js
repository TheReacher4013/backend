const mongoose = require("mongoose");

const PayrollSchema = mongoose.Schema({
    Employeeid: { type: String, required: true },
    Month: { type: String, required: true },
    BaseSalary: { type: Number, required: true },
    Bonus: { type: Number, default: 0 },
    Deduction: { type: Number, default: 0 },
    NetSalary: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Payroll", PayrollSchema);
