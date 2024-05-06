const Event = require('../models/event/events')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const getEvents = asyncErrorHandler(async(req, res)=>{
    const events = await Event.find({})
    res.status(200).json({
        success:true,
        events
    })
})

const addEvent = asyncErrorHandler(async(req, res)=>{
    const {name, desc, date} = req.body;
    if(!name || !desc || !date){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Event({
        name, desc, date
    }).save()
    res.status(200).json({
        success:true,
        message:"Event added successfully"
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