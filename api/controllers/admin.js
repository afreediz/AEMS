const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const Admin = require('../models/admin')
const Event = require('../models/events')
const Participant = require('../models/participants')

const getAdmin = asyncErrorHandler(async(req, res)=>{
    res.status(200).json({
        success:true,
        message:"Authorized",
        admin:req.admin
    })
})

const Profile = asyncErrorHandler(async(req, res)=>{
    const admin = await Admin.find({});
    res.status(200).json({
        success:true,
        message:"Profile",
        admin:admin
    })
})

const dashboardDetails = asyncErrorHandler(async(req, res)=>{
    const participants = await Participant.find({}).populate('event').sort('-1');
    const events_count = await Event.find({}).count();
    res.status(200).json({
        success:true,
        message:"Dashboard details",
        dashboard:{
            participants:participants.slice(0, 5),
            participants_count:participants.length,
            events_count
        }
    })
})

module.exports = { 
    getAdmin,
    Profile,
    dashboardDetails
}