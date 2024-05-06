const mongoose = require('mongoose')

const participantsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    event:{
        type:mongoose.Types.ObjectId,
        ref:'events'
    }
})

module.exports = mongoose.model('participants', participantsSchema)