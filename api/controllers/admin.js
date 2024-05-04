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

module.exports = { getAdmin }