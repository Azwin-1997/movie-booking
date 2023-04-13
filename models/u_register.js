const mongoose = require('mongoose')

const scheme = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("user",scheme);