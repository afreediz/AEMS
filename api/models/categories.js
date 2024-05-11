const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        unique:true,
        required:true
    }
})

categoriesSchema.pre('findByIdAndDelete', async function(next){
    try{
        await this.model('events').deleteMany({category: this._id})
        next()
    }catch(error){
        next(error)
    }
})

module.exports = mongoose.model('categories', categoriesSchema)