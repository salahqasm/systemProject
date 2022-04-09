const express=require("express");
const dotenv=require("dotenv");
const resInfo=require('./routes/resInfo');
const app=express();
const PORT=process.env.PORT || 5000
//load config
dotenv.config({path:'./config/.env'})
//db connection

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect((err)=>{
    if(err){
        console.log(err);
        throw err;
    }
    console.log("connected");
});


app.use('/',resInfo)


app.listen(PORT,()=>{console.log(`SERVER RUNNING ON:${PORT}`);});