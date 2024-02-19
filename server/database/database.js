// db/db.js
const mongoose = require('mongoose');



const connectDb = async ()=>{
    try{
        const mongodburl = process.env.MONGO_URL;
        await mongoose.connect(mongodburl);
        console.log("database is connected")
    }catch(error){
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
}


module.exports = connectDb ;
