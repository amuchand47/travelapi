
const express = require("express");
const City = require("../models/city_details");

// 1: Create a new Router

const router = new express.Router();

router.use(express.json());


// Home page of City Router

router.get("/", (req, res)=>{
    res.send("City Home");
})



// add city post request  i,e create a new city 

router.post("/addcity", (req, res)=>{

    const city = new City(req.body);  // create user 

    city.save().then(()=>{  // then save data on server 
        
        res.status(201).send(city);

    }).catch((e)=>{
        
        res.status(400).send(e);
    
    });

});



// get all cities data from server 

router.get("/getcities", async(req, res)=>{
   
    try {
        const citydata = await City.find();
        res.send(citydata);
    } catch (error) {
        res.send(error);
    }

});




// get individual student data by Id 

router.get("/students/:id", async(req, res)=>{
  
    try {
        const _id = req.params.id;
        const sdata  =  await Student.findById({_id});
        if(!sdata){
            return res.status(404).send();
        }else{
            res.send(sdata);
        }
    } catch (error) {
        res.status(500).send(error);
    }

})




// get individual student data by Mobile Number 


router.get("/students/:phone", async(req, res)=>{
  
    try {
        const _phone = req.params.phone;
        const pdata  =  await Student.find({_phone});
        console.log(pdata);

        if(!pdata){
            return res.status(404).send();
        }else{
            res.status(200).send(pdata);
        }
    } catch (error) {
        res.status(500).send(error);
    }

})



// delete student data by Id 

router.delete("/students/:id", async(req, res)=>{
  
    try {
        const _id = req.params.id;
        const deleteData  =  await Student.findByIdAndDelete({_id});
        if(!_id){
            return res.status(404).send();
        }else{
            res.send(deleteData);
        }
    } catch (error) {
        res.status(500).send(error);
    }

})



// update the data on server

router.patch("/students/:id", async (req, res)=>{

    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {new :true});
        res.send(updateStudent);
    } catch (error) {
        res.status(400).send(error);
    }

})



module.exports = router;

