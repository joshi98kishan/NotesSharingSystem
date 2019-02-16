const express=require('express');
const app=express();
const path=require('path');
const router=express.Router();


router.get('/firstsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/secondsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/thirdsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/fourthsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/fifthsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/sixthsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/seventhsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));
});

router.get('/eighthsem',(req,res,next)=>{
    res.status(200).sendFile(path.join(__dirname,"../frontend","showdata.html"));

});


module.exports=router;