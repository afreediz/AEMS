const mongoose = require('mongoose')

const registerPageSchema = new mongoose.Schema({

}, {timestamps:true})

module.exports = mongoose.model('homePage', registerPageSchema)