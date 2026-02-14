const mongoose = require("mongoose");

const EmployeeSchema =  new mongoose.Schema({

    name:{type:String, required:true},
    email:{type:String,required:true},
    department:{type:String},
    salary:{type:Number},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
},{
    timestamps:true
});

module.exports = mongoose.model("Employee", EmployeeSchema)