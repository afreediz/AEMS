const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const User = require('../models/user')
const { hashPassword, comparePassword } = require("../helpers/auth")
const { generateToken } = require("../helpers/jwt")

const register = asyncErrorHandler(async(req, res)=>{
    console.log(req.body);
    const { name, email, password } = req.body
    if(!name || !email || !password ){
        throw new CustomError('Necessary details are not filled', 404)
    }

    const isExist = await User.findOne({email})
    if(isExist) throw new CustomError('User already exists, Please Login or try with a different email address')

    const hashedPassword = await hashPassword(password)

    await new User({
        name, email:email.toLowerCase(), password:hashedPassword
    }).save()

    res.status(200).json({success:true, message:"User registration successfull"})
})
const login = asyncErrorHandler(async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password) throw new CustomError("Necessary details are not filled", 404)

    const user = await User.findOne({email})
    if(!user) throw new CustomError("User does not exist", 404)

    if(!await comparePassword(password, user.password)) throw new CustomError("Password does not match", 400)

    const token = generateToken({_id:user._id})

    res.status(200).json({
        success:true,
        message:"Login successfull",
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role
        },
        token
    })
})
const forgetPassword = asyncErrorHandler(async(req, res)=>{
    //
})

module.exports = {
    register,
    login,
    forgetPassword
}