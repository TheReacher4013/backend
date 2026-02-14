const jwt = require("jsonwebtoken");
module.exports = (req,res,next)=>{
    const t = req.header.authorization?.split("")[1];
    if(!t) return res.sendStatus(401);
    try{
        req.user = jwt.verify(t,process.env.JWT_TOKRN);next();
    }catch{res.sendStatus(403);
        
    }
}