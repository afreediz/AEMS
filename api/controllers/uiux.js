const HomePage = require('../models/pages/home')
const AboutUsPage = require('../models/pages/aboutus')

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
    AboutUs:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const aboutUsPage = await AboutUsPage.find({})
            res.status(200).json({
                success:true,
                aboutUsPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {aboutUsPage} = req.body
            await AboutUsPage.findOneAndUpdate({}, {aboutUsPage})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    }
}