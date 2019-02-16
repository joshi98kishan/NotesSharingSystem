const express=require('express');
const app=express(); 
const csroutes=require('./routes/csroutes');
const itroutes=require('./routes/itroutes');
const civilroutes=require('./routes/civilroutes');
const mechroutes=require('./routes/mechroutes');

app.use(express.static(__dirname+"/frontend"));

app.use('/',(req,res,next)=>{
    console.log(req.url);
    next();
});

app.get('/', (req,res)=>{
    res.status(200).sendFile(__dirname+"/frontend/index.html");
});

app.get('/admin',(req,res)=>{
    res.status(200).send("This is admin side");
});

app.get('/upload',(req,res)=>{
    res.status(200).send("Want to upload something");
});

app.use('/cs',csroutes);
app.use('/it',itroutes);
app.use('/civil',civilroutes);
app.use('/mech',mechroutes);

app.listen(3000,()=>{
    console.log('Listenenig at port number 3000...');
});