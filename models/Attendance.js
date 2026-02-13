const mongoose = require("mongoose");

const AttendanceSchema = mongoose.Schema({
    "Employeeid": {type: String, required: true},
    "Date":{type:Date,required:true},
    "CheckIn":{type:String},
    "CheckOut":{type: String}
})

module.exports = mongoose.model("Attendance", AttendanceSchema)