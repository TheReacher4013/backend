const Department = require("../models/Department");

exports.createDepartment = async(req, res)=>{
    try{
        const dept = new Department({
            name:req.body.name,
            description:req.body.description
        });
        await dept.save();
        res.json(dept);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.listDepartments = async (req, res)=>{
    try{
        const data = await Department.find();
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.deleteDepartment = async(req, res)=>{
    try{
       const data = await Department.findByIdAndDelete(req.params.id);

       if(!data){
       return res.status(404).json({message:"Not found"});
       }
       res.json({message:"Deleted"});
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};