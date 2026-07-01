const express = require("express");
const router = express.Router();


console.log("Health route loaded");

router.get("/",(req,res)=> {
        res.status(200).json({
            status:"OK",
            message:"Devlog API is running"
        });
});

module.exports = router;