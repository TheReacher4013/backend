const mongoose = require("mongoose")
const Employee = require("./Employee")

const LoanSchema = mongoose.Schema({
    EmployeeId:{type:String, required:true},
    Amount:{type:Number, required:true},
    Status:{type:String, default:"Pending"}
});

module.exports = mongoose.model("Loan", LoanSchema)