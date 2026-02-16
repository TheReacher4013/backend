const Leave = require("../models/Leave");

//Apply for leaves.
exports.applyLeave = async (req, res)=>{
    try{
        const leave = await Leave.create(req.body);
        res.status(201).json(leave);
    }catch(err){
        res.status(500).json({error: err.message});

    }
};
//get All leaves.
exports.getLeaves = async(req, res)=>{
    try{
        const leaves = await Leave.find();
        res.json(leaves);

    }catch(err){
        res.status(500).json({error: err.message});
    }
};

//get leave by Id
exports.getLeave = async(req,res)=>{
    try{
        const leave = await Leave.findById(req.params.id);
        if(!leave)return res.status(404).json({msg:"Not Found"});
        res.json(leave);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
//update leaves
exports.updateLeave = async(req, res)=>{
    try{
        const leave = await Leave.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.json(leave)
    }catch(err){
        res.status(500).json({
            error:err.message
        });

    }
};

//delete leave

exports.deleteLeave = async(req, res)=>{
    try{
        const leave = await Leave.findByIdAndDelete(req.params.id);
        res.json({mesg:"leave deleted"})
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};