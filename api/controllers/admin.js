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

const getServerStatus = asyncErrorHandler(async(req, res)=>{
    const admin = await Admin.find({});
    res.status(200).json({
        success:true,
        server_status:admin[0].server_status
    })
})

const serverStatusUpdate = asyncErrorHandler(async(req, res)=>{
    const {server_status} = req.body
    await Admin.findOneAndUpdate({}, {server_status})
    res.status(200).json({
        success:true,
        message:"Server status updated successfully"
    })
})

module.exports = { 
    getAdmin,
    Profile,
    dashboardDetails,
    getServerStatus,
    serverStatusUpdate
}