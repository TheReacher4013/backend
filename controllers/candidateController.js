const Candidate = require("../models/Candidate");

exports.createCandidate = async (req,res)=>{
    try{
        const data = await Candidate.create(req.body);
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.listCandidate = async(req,res)=>{
    try{
        const data = await Candidate.find();
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });

    }
};

exports.deleteCandidate = async(req,res)=>{
    try{
        await Candidate.findByIdAndDelete(req.params.id);
        res.json({message:"DELETED"});
    }catch(err){
        res.status(500).json({
            error:err.message
        });

    }
};
