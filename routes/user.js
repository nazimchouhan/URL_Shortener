
const express=require("express");

const {handleuser,handleuserLogin}=require("../controllers/user");

const router=express.Router();

router.post("/",handleuser);
router.post("/Login",handleuserLogin);

module.exports=router;