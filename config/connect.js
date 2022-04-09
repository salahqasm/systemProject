//const dotenv=require("dotenv")
//dotenv.config({path:'./config/config.env'})
let connectDB=()=>{
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
}
module.exports=connectDB
