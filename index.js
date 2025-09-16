
const express=require("express")

const router=require("./routes/url");

const cookieParser=require("cookie-parser");

const {urlModel}=require("./models/url")

const {connectMongoDb}=require("./connect");

const userroute=require("./routes/user");

const {checkingtheUser}=require("./middleware/auth");


connectMongoDb('mongodb://localhost:27017/UrlDatabase')
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch((err) => {
    console.log("connection error", err);
  });

const app=express();

const PORT=8000;

app.use(express.json());

// URL Shortner Routes

app.use(express.urlencoded());

app.use(cookieParser());


app.use("/api/url",checkingtheUser,router);

app.get("/api/url/:id",async (req,res)=>{
    const id=req.params.shortId;

    const result=await urlModel.findOneAndUpdate({id},

        {
            $push:{
                visithistory:{timestamp:Date.now()}

            }
        }
    )
    res.redirect(result.redirecturl);

});
app.get("/api/url/clicks/:id",async (req,res)=>{
    const id=req.params.shortId;

    const result=await urlModel.findOne({id});
    res.json({"Clicks":result.visithistory.length});
});


// Authentication Routes

app.use("/api/register",userroute);


app.listen(PORT,()=>{
    console.log("server is started");
})

