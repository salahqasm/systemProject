const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    
    res.send(client.query("\dt"));
})


module.exports=router;