const validator = require("validator");
const mongoose = require("mongoose");


// schema of a city 

const citySchema = new mongoose.Schema({

    name : {
        type : String,
        required: true,
        minlength: 3,
    },


    location:{
       type : String,
       required : true,
       minlength: 3
    },


    price :{
        type : Number ,
        required : true,
    },


    details : {

        type : String,
        required : true,

    },

    // photos : {
         
           

    // }

})


// now we create a new collection

const City = new mongoose.model('City', citySchema);

module.exports = City;
