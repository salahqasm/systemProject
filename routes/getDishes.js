const express=require("express");
const router=express.Router();
const client=require("../config/connect");

async function getDishes(req,res){
    try {
        let sql="select * from dishes;";
        let result=await client.query(sql);
        res.send(result.rows);   
    } catch (err) {
        console.log(err);
    }
}

router.use('/',getDishes);

module.exports=router;