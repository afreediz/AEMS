const mongoose = require('mongoose')

const eventsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:mongoose.Types.ObjectId,
        ref:'categories',
        required:true
    }
}, {timestamps:true})

eventsSchema.pre('findByIdAndDelete', async function(next) {
    try {
      await this.model('participants').deleteMany({ event: this._id });
      next();
    } catch (error) {
      next(error); // Pass any errors to the next middleware
    }
});

eventsSchema.pre('deleteMany', async function(next){
    try{
        await this.model('participants').deleteMany({event: this._id})
        next()
    }catch(error){
        next(error)
    }
})


module.exports = mongoose.model('events', eventsSchema)