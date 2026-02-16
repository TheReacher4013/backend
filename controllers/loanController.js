const Loan = require("../models/Loan");

exports.createLoan = async (req, res) =>{
    try{
        const data = await Loan.create(req.body);
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.listLoans = async(req, res) =>{
    try{
        const data = await Loan.find();
        res.json(data);
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

exports.deleteLoan = async(req,res)=>{
    try{
        const data = await Loan.findByIdAndDelete(req.params.id);
        if(!data){
            return res.status(400).json({
                message:"Loan not Found"
            });
        }
        res.json({message:"Loan Deleted"})
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};