const mongoose = require('mongoose')

const homePageSchema = new mongoose.Schema({
    fest_name:String,
    fest_quote:String,
    fest_desc:String
}, {timestamps:true})

module.exports = mongoose.model('homePages', homePageSchema)