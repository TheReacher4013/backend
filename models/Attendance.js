const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
    "Employeeid": {type: String, required: true},
    "Date":{type:Date,required:true},
    "CheckIn":{type:String},
    "CheckOut":{type: String}
},{timestamps:true});

module.exports = mongoose.model("Attendance", AttendanceSchema)