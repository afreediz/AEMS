const HomePage = require('../models/pages/home')
const AboutUsPage = require('../models/pages/about')
const ContactPage = require('../models/pages/contact')
const LocationPage = require('../models/pages/location')

const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const Event = require('../models/events')
const Participant = require('../models/participants')

module.exports = {
    Home:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const homePage = await HomePage.findOne({})
            console.log(homePage);
            res.status(200).json({
                success:true,
                homePage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {fest_name, fest_quote, fest_desc} = req.body
            console.log(req.body);
            console.log(await HomePage.findOne({}));
            await HomePage.findOneAndUpdate({}, {fest_name, fest_quote, fest_desc})
            res.status(200).json({
                success:true,
                message:"HOME Page updated successfully"
            })
        })
    },
    AboutUs:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const aboutUsPage = await AboutUsPage.findOne({})
            res.status(200).json({
                success:true,
                aboutUsPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {heading, content} = req.body
            await AboutUsPage.findOneAndUpdate({}, {heading, content})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    },
    Contact:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const contactPage = await ContactPage.findOne({})
            res.status(200).json({
                success:true,
                contactPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {contact_info, social_medias} = req.body
            console.log("contact_info",contact_info, " social_medias", social_medias);
            console.log(await ContactPage.findOne({}));
            await ContactPage.findOneAndUpdate({}, {contact_info, social_medias})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    },
    Events:{
        getRegisterEvents: asyncErrorHandler(async(req, res)=>{
            const events = await Event.find({}).select('_id name')
            res.status(200).json({
                success:true,
                events
            })
        }),
        getPageByCategory: asyncErrorHandler(async(req, res)=>{
            const events = await Event.aggregate([
                {
                  $lookup: {
                    from: 'categories', // Name of the Category collection
                    localField: 'category', // Field in Events collection
                    foreignField: '_id', // Field in Category collection
                    as: 'category' // Alias for the joined documents
                  }
                },
                {
                  $unwind: '$category' // Deconstruct the category array
                },
                {
                  $group: {
                    _id: '$category._id', // Group by category id
                    category_name: { $first: '$category.name' }, // Get the category name
                    category_slug: { $first: '$category.slug' }, // Get the category slug
                    events: { $push: { _id: '$_id', name: '$name', price: '$price', desc: '$desc', date: '$date' } } // Push events into an array
                  }
                }
              ]);
            res.status(200).json({
                success:true,
                events
            })
        })
    },
    Location:{
        getPage: asyncErrorHandler(async(req, res)=>{
            const locationPage = await LocationPage.findOne({})
            res.status(200).json({
                success:true,
                locationPage
            })
        }),
        updatePage: asyncErrorHandler(async(req, res)=>{
            const {heading, content, location} = req.body
            await LocationPage.findOneAndUpdate({}, {heading, content, location})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    },
    Others:{
        getPage: asyncErrorHandler(async(req, res)=>{
            // const others = await new HomePage.find({})
            res.status(200).json({
                success:true,
                // others
            })
        }),
        update: asyncErrorHandler(async(req, res)=>{
            const {others} = req.body
            // await HomePage.findOneAndUpdate({}, {others})
            res.status(200).json({
                success:true,
                message:"Page updated successfully"
            })
        })
    }
}