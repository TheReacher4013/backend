const Notice = require("../models/Notice");

exports.createNotice = async(req, res)=>{
    try{
        const data = await Notice.create(req.body);
        res.json(data);
    }catch(err){
        res.status(500).json({
            error: err.message
        });
    }
};

exports.listNotices = async(req,res)=>{
    try{
        const data = await Notice.find();
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.deleteNotice = async(req,res)=>{
    try{
        const data = await Notice.findByIdDelete(req.params.id);
        if (!data) {
            return res.status(400).json({
                message: "LNotice not Found"
            });
        }
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};