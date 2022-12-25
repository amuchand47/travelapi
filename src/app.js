
// adding module 

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
require("./db/conn");

// addding routers 

const cityRouter = require("./routers/city_details");


// 3: Register router

app.use("/api", cityRouter);


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// server request 

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
})