
const jwt=require("jsonwebtoken");
const secret="meowmeowmeowmeowmeow";

function setuser(user){
    return jwt.sign(user,secret)

}

function getuser(token){

    return jwt.verify(token,secret);
}


module.exports={setuser,getuser};