const Participants = require('../models/participants')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const getParticipants = asyncErrorHandler(async(req, res)=>{
    const participants = await Participants.find({}).populate('event')
    res.status(200).json({
        success:true,
        participants
    })
})

const addParticipants = asyncErrorHandler(async(req, res)=>{
    const {name, email, phone, address, event} = req.body;
    if(!name || !email){
        throw new CustomError('Necessary details are not filled', 404)
    }
    const saved = await new Participants({
        name, email, phone, address, event
    }).save()
    const participant = await Participants.findById(saved._id).populate('event')
    res.status(200).json({
        success:true,
        message:"Participant added successfully",
        participant
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