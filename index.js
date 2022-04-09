const express=require("express");
const dotenv=require("dotenv");
const resInfo=require('./routes/resInfo');
const connectDB=require("./config/connect");
const app=express();
const PORT=process.env.PORT || 5000
//load config
dotenv.config({path:'./config/.env'})

app.use('/',resInfo)
connectDB();


app.listen(PORT,()=>{console.log(`SERVER RUNNING ON:${PORT}`);});