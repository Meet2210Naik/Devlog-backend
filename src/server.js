const app = require("./app");
const connectDB = require("./config/db");

//const mongodb = require("./config/db");
require("dotenv").config();

//connect to database FIRST
connectDB();

const PORT = process.env.Port || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
});