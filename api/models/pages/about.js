const mongoose = require('mongoose')

const aboutUsPageSchema = new mongoose.Schema({
    heading:String,
    content:String
})

module.exports = mongoose.model('aboutPages', aboutUsPageSchema)