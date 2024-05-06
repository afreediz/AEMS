const mongoose = require('mongoose')

const eventPageSchema = new mongoose.Schema({

}, {timestamps:true})

module.exports = mongoose.model('homePage', eventPageSchema)