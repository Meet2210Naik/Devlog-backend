const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,default:"general"},
    tags:{type:[String],default:[]},
    moods:{type:String,enum:["Happy,Neutral","Frustrated","Excited"]},
    status:{type:String,default:"draft"},
    
},{timestamps:true});

const Log = mongoose.model("Log",logSchema);

module.exports = Log;