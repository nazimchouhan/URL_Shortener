
const sessionIdtoUser=new Map();

function setuser(id,user){
    sessionIdtoUser.set(id,user);
    console.log(sessionIdtoUser.size);

}

function getuser(id){
    console.log(sessionIdtoUser.size);
    return sessionIdtoUser.get(id);
}


module.exports={setuser,getuser};