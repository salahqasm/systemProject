const express=require("express");
const router=express.Router();
const client=require("../config/connect");
async function getrestaurants(req,res){
    try {
   
        let sql = `select * from restaurant;`;
        let result=await client.query(sql)

        res.send(result.rows)
    } catch (error) {
        console.log(error);
    }

}
router.get('/',getrestaurants);

module.exports=router;