const Log = require("../models/Log.js");


const createLog = async (req,res) =>{

    try{
    const {title,description,category,tags,mood,status} = req.body;
    const newLog = await Log.create({
        title,
        description,
        category,
        tags,
        mood,
        status
    });

    res.status(201).json(newLog);
}
catch(error){
    res.status(500).json({message:error.message});
}
}

const getLogs = async (req,res) => {

    try{
        const allLogs = await Log.find();
        res.status(200).json({logs : allLogs});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {createLog,getLogs};