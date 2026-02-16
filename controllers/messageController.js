const Message = require("../models/Message")

exports.createMessage = async(req,res)=>{
    try{
        const data = await Message.create(req.body);
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.Message
        });

    }
};

exports.listMessage = async(req, res)=>{
    try{
        const data = await Message.find();
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });

    }
};

exports.deleteMessage = async(req, res)=>{
    try{
        await Message.findByIdDelete(req.params.id);
        res.json({message:"deleted"})
    }catch(err){
        res.status(500).json({
            error:err.message
        })

    }
};
