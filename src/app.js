
//imports the express library to build the server
//node.js can alone handle servers but its low level verbose
//harder to manage routes
//express gives us routing(GET,POST)
//middleware system request response handling
const express = require("express");

//Cross-Origin Resource sharing
const cors = require("cors");
const { model } = require("mongoose");

//Creates the server application instance
const app = express();

//Allows any front end to talk to back end;
app.use(cors());
//Allows server to read JSON data from request
app.use(express.json());

//first api route
app.get("/",(req,res)=>{
    res.send("Devlog API Runnning");
});


//we are exporting the server instance
module.exports = app;