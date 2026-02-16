const Award = require("../models/Award");

exports.createAward = async(req, res)=>{
    try{
        const data = await Award.create(req.body);
        res.json(data);
    }catch(err){
       res.status(500).json({ error:err.message});

    }
};

exports.listAwards = async(req,res)=>{
    try{
        const data = await Award.find();
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.deleteAward = async(req, res)=>{
    try{
        const data = await Award.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(404).json({
                message:"Award not found"
            });
        }
        res.json({message:"Deleted"});
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};