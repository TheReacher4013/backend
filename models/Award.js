const mongoose = require("mongoose");

const AwardSchema = mongoose.Schema({
    EmployeeId:{type:String},
    Title:{type:String},
    Date:{type:Date}
});

module.exports = mongoose.model("Award", AwardSchema);