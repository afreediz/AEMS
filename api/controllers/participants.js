const Participants = require('../models/')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const getParticipants = asyncErrorHandler(async(req, res)=>{
    const participants = await Participants.find({})
    res.status(200).json({
        success:true,
        participants
    })
})

const addParticipants = asyncErrorHandler(async(req, res)=>{
    const {name, email, event} = req.body;
    if(!name || !email){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Participants({
        name, email, event
    }).save()
    res.status(200).json({
        success:true,
        message:"Participant added successfully"
    })
})

const updateParticipants = asyncErrorHandler(async(req, res)=>{
    const {name, email, event} = req.body;
    if(!name || !email){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Participants.findByIdAndUpdate(req.params.id, {
        name, email, event
    })
    res.status(200).json({
        success:true,
        message:"Participant updated successfully"
    })
})

const deleteParticipants = asyncErrorHandler(async(req, res)=>{
    await Participants.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"Participant deleted successfully"
    })
})

module.exports = { 
    getParticipants,
    addParticipants, 
    updateParticipants,
    deleteParticipants
 }