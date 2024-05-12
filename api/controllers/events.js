const Event = require('../models/events')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const getEvents = asyncErrorHandler(async(req, res)=>{
    const events = await Event.aggregate([
        {
            $lookup:{
                from:"participants",
                localField:"_id",
                foreignField:"event",
                as:"participants"
            }
        },
        {
            $project:{
                name:1, date:1, price:1, category:1, slug:1,
                participants_count:{$size:"$participants"}
            }
        }
    ])
    res.status(200).json({
        success:true,
        events:events
    })
})

const addEvent = asyncErrorHandler(async(req, res)=>{
    const {name, desc, date, price, category} = req.body;
    if(!name || !desc || !date || !price || !category){
        throw new CustomError('Necessary details are not filled', 404)
    }
    const event = await Event({
        name, desc, date, price, category
    }).save()
    res.status(200).json({
        success:true,
        message:"Event added successfully",
        event
    })
})

const updateEvent = asyncErrorHandler(async(req, res)=>{
    const {name, desc, date} = req.body;
    if(!name || !desc || !date){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Event.findByIdAndUpdate(req.params.id, {
        name, desc, date
    })
    res.status(200).json({
        success:true,
        message:"Event updated successfully"
    })
})

const deleteEvent = asyncErrorHandler(async(req, res)=>{
    await Event.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"Event deleted successfully"
    })
})

module.exports = {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
}