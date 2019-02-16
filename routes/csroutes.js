const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const router=express.Router();

app.use(express.static(path.join(__dirname,"../frontend")));
// const datapath=path.join(__dirname,"data/cs/firstsem");
const datapath=__dirname+"data/cs/firstsem";

router.get('/firstsem',(req,res,next)=>{
    fs.readdir(datapath,(err,files)=>{
        // for(let x of files){
        //     console.log(x);
        // }
        console.log(files);
    });
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