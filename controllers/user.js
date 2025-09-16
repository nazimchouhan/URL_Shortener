
const {userModel}=require("../models/user");

const {v4:uuidv4}=require("uuid");

const{setuser,getuser}=require("../service/auth");

console.log("hello");
async function handleuser(req,res){
    const {name,email,password}=req.body;
    
    const user=await userModel.create({
        name:name,
        email:email,
        password:password

    });
    res.json({mssg:"you are at home page"});
}

async function handleuserLogin(req,res){
    const {email,password}=req.body;
    
    const user=await userModel.findOne({
        email,
        password

    });

    const Sessionid=uuidv4();
    console.log("mssg",Sessionid);

    setuser(Sessionid,user);
    res.cookie("uid",Sessionid);

    res.json({mssg:"Login Successfully","uid":Sessionid});
}

module.exports={handleuser,handleuserLogin};