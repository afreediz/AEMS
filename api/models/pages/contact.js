const mongoose = require('mongoose')

const contactPageSchema = new mongoose.Schema({
    contact_info:[
        {
            type: {
              type: String,
              required: true,
              enum:['phone','envelope','location']
            },
            content: {
              type: String,
              required: true
            }
        }
    ],
    social_medias:[
        {
            type:{
                type:String,
                required:true,
                enum:['instagram','twitter','facebook','linkedin']
            },
            content:{
                type:String,
                required:true
            }
        }
    ]
})

module.exports = mongoose.model('contactPages', contactPageSchema)