
const mongoose=require("mongoose");

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        require:true,
        
    },
    visithistory:[{timstamp:{type:Number}}],

},{timestamps:true});

const urlModel=mongoose.model("Url",urlSchema);

module.exports={urlModel};