const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const Admin = require('../models/admin')

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

module.exports = { 
    getAdmin,
    Profile
}