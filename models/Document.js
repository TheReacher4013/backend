const mongoose = require("mongoose")

const DocumentSchema = new mongoose.Schema({
    Employeeid:{type:String, required:true},
    FielName:{type:String, required:true},
    FilePath: { type:String, required:true},
    FileType: { type:String},
})
module.exports = mongoose.model("Document", DocumentSchema)