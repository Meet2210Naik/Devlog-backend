//const {MongoClient} = require("mongodb");
const mongoose = require("mongoose");

// const uri = "mongodb://127.0.0.1:27017";
// const client = new MongoClient(uri);

// let db;
//fucntion to connect to db
const connectDB = async () => {
    try{
    await mongoose.connect("mongodb://127.0.0.1:27017/devlog");
    console.log("MongoDB connected");
}
catch(error)
{
    console.error(`DATABASE CONNECTION FAILED : ${error.message}`);
    process.exit(1);
}
}


module.exports = connectDB;
//fucntion to conenct to db
//MongoDB driver native
// const connectDB = async () => {
//     try{
//         //Returns a promise
//         //await pauses fucntion untill connection completes
//         await client.connect();
//         db =   client.db("devlog");
//         console.log("MongoDB connected!");
//         return db;
//     }
//     catch(error){
//         console.error("Database connection failed: " + error.message);
//         process.exit(1);
//     }
// }

// const getDb = () => db;


//module.exports = {getDb ,connectDB};