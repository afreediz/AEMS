const mongoose = require('mongoose')

const certificatesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    participant:{
        type:mongoose.Types.ObjectId,
        ref:'participants'
    }
})

module.exports = mongoose.model('certificates', certificatesSchema)