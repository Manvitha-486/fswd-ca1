const express=require("express");
const app=express();

const cors=require("cors");
const port=3010;
app.use(cors());


app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.post('/',(req,res)=>{
    const {Username,Email, Password,DateOfBirth}=req.body;
    if(!Username)
        res.status(400).send({message:'Username cannot be empty'})
    if(!email)
        res.status(400).send({message:"Email cannot be empty"})
    const password=Password.length
    if(password<8 || password>16)
        res.status(400).send({message:"Password length should be greater than 8 or equal to 16"})
    

    res.status(200).send({message:"Success"})
});



app.listen(port,()=>{
    console.log(`server connected successfully at ${port}`);
});