const mongoose = require("mongoose");

const LeaveSchema = new mongoose.Schema({
    employeeid:{type:String, required:true},
    fromDate:{type:Date, required:true},
    toDate:{type:Date, required:true},
    leaveReason:{type:String, required:true},
    status:{type:String, default:"pending"} 
},{
    timestamps:true
});

module.exports = mongoose.model("Leave", LeaveSchema)