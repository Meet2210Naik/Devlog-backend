const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db;

//fucntion to conenct to db
const connectDB = async () => {
    try{
        //Returns a promise
        //await pauses fucntion untill connection completes
        await client.connect();
        db =   client.db("devlog");
        console.log("MongoDB connected!");
        return db;
    }
    catch(error){
        console.error("Database connection failed: " + error.message);
        process.exit(1);
    }
}

const getDb = () => db;


module.exports = {getDb ,connectDB};