


const jwt = require("jsonwebtoken")

module.exports = (req,res,next)=>{
    try{

        const token = req.get("authentication").split(" ")[1];
        //verify with the encryption key 
        let decodedToken= jwt.verify(token , "nurseryteacher");
        req.token = decodedToken;
        next(); // where will this go 
    }
    catch(error){
        error.message = "token not found";
        error.status = 401;
        next(error);
    }
};


module.exports.isAdmin = (req,res,next)=>{
    if(req.token.role == "admin")
        next();
    else 
    {
        let error = new Error("you are not an admin")
        error.status = 401;
        next(error);
    }
}

module.exports.isTeacher = (req,res,next)=>{
    if(req.token.role == "teacher")
        next();
    else 
    {
        let error = new Error("you are not a teacher")
        error.status = 401;
        next(error);
    }
}


module.exports.isAdminOrTeacher = (req,res,next)=>{
    if(req.token.role == "teacher" ||req.token.role == "admin" )
        next();
    else 
    {
        let error = new Error("you are not a teacher or an admin")
        error.status = 401;
        next(error);
    }
}