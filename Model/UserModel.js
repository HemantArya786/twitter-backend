







const mongoose = require("mongoose");

const userSchema= mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:250,
        required:true
    },
    password:{
        type:String,
        min:3,
        max:250,
        required:true
    },
    email:{
        type:String,
        min:3,
        max:250,
        required:true
    },
    phone:{
        type:String,
        min:3,
        max:250,
        required:true
    }
})
module.exports = mongoose.model("user", userSchema)