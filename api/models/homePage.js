const mongoose = require('mongoose')

const homePageSchema = new mongoose.Schema({

}, {timestamps:true})

module.exports = mongoose.model('homePage', homePageSchema)