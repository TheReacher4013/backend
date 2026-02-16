const mongoose = require("mongoose");

const DepartmentSchema = mongoose.Schema({
    Name:{type:String},
    Description:{type:String}
});

module.exports = mongoose.model("Department", DepartmentSchema);