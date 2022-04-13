const express=require("express");
const client=require("../config/connect");
const router=express.Router();

async function addRes(req,res){
    const {name, univ ,stname ,openhr,closehr,phone,img}=req.body;
    try {
        let sql="insert into restaurant(resname,nearbyuniv,stname,openhr,closehr,phone,image_url) values ($1,$2,$3,$4,$5,$6,$7);";
        let values=[name, univ ,stname ,openhr,closehr,phone,img];
        let result = await client.query(sql,values);
        res.send(result);
    } catch (err) {
        
    }
}
router.post('/',addRes);

module.exports=router;

