const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res)=>{
    try{
        const {name,email, password, role} = req.body;

        const exists = await User.findOne({email});
        if(exists){
            return res.status(400).json({msg:"email already exists"});
        }
        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password:hash,
            role
        });
        res.status(201).json({
            msg:"User Created", user
        });
    }catch(err){
        res.status(500).json({
            error:err.message
        });
    }
};

//login 
exports.login = async (req,res)=>{
    try{
        const{email, password} =req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg:"Invalid Email"});
        }
        const ok = await bcrypt.compare(password, user.password);
        if (!ok){
            return res.status(400).json({msg:"invalid password"});
        }

        //token
        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_TOKEN || "secretkey",
            {expiresIn:"7d"} 
        );
        res.json({msg:"Login success", token, user});
    }catch(err){
        res.status(500).json({error:err.message})
    }
};