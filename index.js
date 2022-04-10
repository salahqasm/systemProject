const express=require("express");
const dotenv=require("dotenv");
const client=require("./config/connect");
const app=express();
app.use(express.json())
const PORT=process.env.PORT || 5000
//load config
dotenv.config({path:'./config/config.env'})




app.use("/add",require("./routes/addRes"))
app.use("/",require("./routes/resInfo"))

client.connect().then(() => {
        app.listen(PORT, () =>
            console.log(`listening on ${PORT}`)
        );
    })