const mongoose = require('mongoose')

const aboutUsPageSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    gallery:[{
        type:String
    }]
})

module.exports = mongoose.model('aboutUsPage', aboutUsPageSchema)