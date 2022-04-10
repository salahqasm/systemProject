const express=require("express");
const { append } = require("express/lib/response");
const client=require("../config/connect");
const router=express.Router();

async function addRes(req,res){
    const {name, univ ,stname ,openhr,closehr,img}=req.body;
    try {
        let sql="insert into restaurant(resname,nearbyuniv,stname,openhr,closehr,image_url) values ($1,$2,$3,$4,$5,$6);";
        let values=[name, univ ,stname ,openhr,closehr,img];
        let result = await client.query(sql,values);
        res.send(result);
    } catch (err) {
        
    }
}
router.post('/',addRes);

module.exports=router;

