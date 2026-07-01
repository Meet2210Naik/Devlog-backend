const mongoose = require("mongoose");

//fucntion to conenct to db
const connectDB = async () => {
    try{
        //Returns a promise
        //await pauses fucntion untill connection completes
        await mongoose.connect("mongodb://127.0.0.1:27017/devlog");
        console.log("MongoDB connected!");
    }
    catch(error){
        console.error("Database connection failed: " + error.message);
        process.exit(1);
    }

}

module.exports = connectDB;