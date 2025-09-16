
const {getuser}=require("../service/auth");

function checkingtheUser(req,res,next){

    const uuid=req.cookies.uid;
    console.log(uuid);

    if(uuid==null){
        return res.json({mssg:"invalid User"});

    }
    const user=getuser(uuid);
    if(user==null){
        return res.json({mssg:"invalid User hai"});
    }
    req.user=user;
    next();
}


module.exports={checkingtheUser};
