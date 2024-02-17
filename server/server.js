const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
require('dotenv').config();

// parse application/json
app.use(bodyParser.json());

const mongodburl = process.env.MONGO_URL;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const userModel = mongoose.model('User', userSchema);

app.post('/post', async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: "Issue in saving the user" }); // Fix: Use 500 for internal server error
    }
});


app.get('/getdata',async (req,res)=>{
    try{
        const user = await userModel.find()
        
        res.status(201).json(user)
    }catch(error){
        console.log("error in geting the data ",error)
        res.status(404).json({error:"some error is append"})
    }
})


app.delete('/del/:userid', async (req,res)=>{

    const userid = req.params.userid
    try{
        const userdel = await userModel.findByIdAndDelete(userid);
        if(!userdel){
            res.status(404).json("user not found ")
        }
        res.status(201).json("userid",userid ,"is delate")
    }catch(error){
        console.log(error)
        res.status(404).json('is some error happend')
    }
})

app.put('/up/:userid', async (req,res)=>{
    const  useridup= req.params.userid;
    const {name,email} = req.body;
    try {
        const updateuser = await userModel.findByIdAndUpdate(useridup,{name,email}, {new:true})

        if(!updateuser){
            res.status(404).json({'message':'it no user was not found'})
        }
        res.status(201).json(updateuser);
    }catch(error){
      console.log(error)
      res.status(404).json({'error':'it some issue checkit '})
    }


})


app.get('/', (req, res) => {
    res.json("Server is running");
});

mongoose.connect(mongodburl)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });
