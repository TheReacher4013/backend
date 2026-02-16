const mongoose = require("mongoose");

const NoticeSchema = mongoose.Schema({
    Title:{type:String},
    Message:{type:String},
    Date:{type:Date, default:Date.now}
});
module.exports = mongoose.model("Notice", NoticeSchema);