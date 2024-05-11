const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    heading:String,
    content:String,
    location: {
        type: {
          type: String, // Don't forget to specify the type as "Point"
          enum: ['Point'], // This ensures the field can only store "Point" type data
          default:"Ponit",
          required: true
        },
        coordinates: {
          type: [Number], // Array of two numbers: longitude and latitude
          required: true
        }
    }
})

module.exports = mongoose.model('locationPages', locationSchema)