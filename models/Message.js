const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
    From:{type:String},
    To:{type:String},
    Text:{type:String},
    Date:{type:Date, default:Date.now}
});
module.exports = mongoose.model("Message", MessageSchema);