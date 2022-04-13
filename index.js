const express=require("express");
const dotenv=require("dotenv");
const client=require("./config/connect");
const app=express();
app.use(express.json())
const PORT=process.env.PORT || 5000
//load config
dotenv.config({path:'./config/config.env'})




app.use("/add",require("./routes/addRes")) //route for adding a new restaurant
app.use("/getrestaurants",require("./routes/getRes")) // route for getting all restaurants rows
app.use("/getdishes",require("./routes/getDishes")) //get all dishes



client.connect().then(() => {
        app.listen(PORT, () =>
            console.log(`listening on ${PORT}`)
        );
    })