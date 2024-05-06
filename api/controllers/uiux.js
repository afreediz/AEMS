const HomePage = require('../models/homePage')
const EventsPage = require('../models/event/eventPage')
const QueryPage = require('../models/queries/queryPage')
const RegisterPage = require('../models/participants/registerPage')

const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

module.exports = {
    Home:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const homePage = await HomePage.find({})
            res.status(200).json({
                success:true,
                homePage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {homePage} = req.body
            await HomePage.findOneAndUpdate({}, {homePage})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    },
    Events:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const eventsPage = await EventsPage.find({})
            res.status(200).json({
                success:true,
                eventsPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {eventsPage} = req.body
            await EventsPage.findOneAndUpdate({}, {eventsPage})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    },
    Query:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const queryPage = await QueryPage.find({})
            res.status(200).json({
                success:true,
                queryPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {queryPage} = req.body
            await QueryPage.findOneAndUpdate({}, {queryPage})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    },
    Register:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const registerPage = await RegisterPage.find({})
            res.status(200).json({
                success:true,
                registerPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {registerPage} = req.body
            await RegisterPage.findOneAndUpdate({}, {registerPage})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    }
}