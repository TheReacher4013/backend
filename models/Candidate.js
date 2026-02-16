const mongoose = require("mongoose");

const CandidateSchema = mongoose.Schema({
    Name:{type:String},
    Email:{type:String},
    Stage:{type:String, default:"Applied"}
});

module.exports = mongoose.model("Candidate", CandidateSchema);