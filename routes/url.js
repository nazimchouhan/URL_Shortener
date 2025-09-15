
console.log("Body Received")
const express=require("express");

const router=express.Router();

const {handleUrlShortner}=require("../controllers/url");

router.post("/",handleUrlShortner);


module.exports=router;
