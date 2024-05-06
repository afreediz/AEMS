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
    catergory:{
        type:mongoose.Types.ObjectId,
        ref:'categories'
    }
}, {timestamps:true})

module.exports = mongoose.model('events', eventsSchema)