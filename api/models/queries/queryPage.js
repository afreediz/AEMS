const mongoose = require('mongoose')

const queryPageSchema = new mongoose.Schema({

}, {timestamps:true})

module.exports = mongoose.model('homePage', queryPageSchema)