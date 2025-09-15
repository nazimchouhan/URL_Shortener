
console.log("Body reveived");
const {nanoid} = require("nanoid");

const {urlModel}=require("../models/url");

async function handleUrlShortner(req,res){

    console.log("reached");
    const body=req.body;
    console.log("Body",req.body);
    const shortId= nanoid(8);

    const result=await urlModel.create({
        shortId:shortId,
        redirecturl:body.url,
        visithistory:[] 
    });

    return res.json({id:shortId});
}
module.exports={handleUrlShortner};
