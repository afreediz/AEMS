const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'categories',
        required:true
    }
}, {timestamps:true})

module.exports = mongoose.model('events', eventsSchema)