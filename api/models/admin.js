const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    server_status:{
        type:Boolean,
        default:true
    }
}, {timestamps:true})

module.exports = mongoose.model('admin', adminSchema)