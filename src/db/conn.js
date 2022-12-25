const mongoose = require("mongoose");
const dotenv = require("dotenv")

// connect to localhost database

// const dbLocalUrl = "mongodb://localhost:27017/travel-api"; 

//`mongodb+srv://amuchand47:Chandcalifornia@cluster0.j3cxb4l.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const dbName = "travel-api";

dotenv.config({path:"./config.env"}); 

const dbUrl = process.env.DATABASE;

mongoose.connect(dbUrl, {
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log("Travel Api Connected!!!");

}).catch((e)=>{

    console.log(e);

});



