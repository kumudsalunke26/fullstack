const mongoose  = require("mongoose")

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        default : "user",
        enum : ["user","admin"]
    }
},{timestamps : true})

const USER = mongoose.model('users',userSchema)

module.exports = USER