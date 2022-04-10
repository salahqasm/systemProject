const express=require("express");
const dotenv=require("dotenv");
const client=require("./config/connect");
const { path } = require("express/lib/application");
const app=express();
app.use(express.json())

const PORT=process.env.PORT || 5000
//load config
dotenv.config({path:'./config/config.env'})
//db connection


app.use("/add",require("./routes/addRes"))

app.get("/",(req,res)=>{
    res.send(__dirname);
})

client.connect().then(() => {
        app.listen(PORT, () =>
            console.log(`listening on ${PORT}`)
        );
    })