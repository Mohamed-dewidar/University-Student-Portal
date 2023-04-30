const jwt =require('jsonwebtoken');
const JWT_Password= require('../JWTPassword');

const authenticationMethod = (req,res,next)=>{
    try{
        const token=req.header('authtoken');
        if(!token){
            return res.json({msg:"authentication failed"});
     }
        const verified = jwt.verify(token,JWT_Password);
        console.log(verified);
        console.log("you reached line 10 in authentication.js");
        
        
        if(!verified){
               return res.json({msg:"authorization failed"});
        }
       
       const isHr = verified.role === "hr";
        if(!isHr){
            return res.json({msg:"Not authorized"});
        }
        req.role="hr";
        req.id = verified.id ;
        next();
        
    }
    catch(error){
        console.log("you reached line 24 in authentication.js");  
     res.status(500).json({error:error.message});
 
    }
 }


 

 module.exports = authenticationMethod;
