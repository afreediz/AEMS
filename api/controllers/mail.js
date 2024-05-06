const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const sendMail = asyncErrorHandler(async(req, res)=>{
    const {name, email, message} = req.body
    if(!name || !email || !message){
        throw new CustomError('Necessary details are not filled', 404)
    }
    res.status(200).json({
        success:true,
        message:"Mail sent successfully"
    })
})

module.exports = { sendMail }