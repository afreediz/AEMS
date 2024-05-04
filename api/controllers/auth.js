const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const Admin = require('../models/admin')
const { hashPassword, comparePassword } = require("../helpers/auth")
const { generateToken } = require("../helpers/jwt")

const register = asyncErrorHandler(async(req, res)=>{
    console.log(req.body);
    const { name, email, password } = req.body
    if(!name || !email || !password ){
        throw new CustomError('Necessary details are not filled', 404)
    }

    const isExist = await Admin.findOne({email})
    if(isExist) throw new CustomError('User already exists, Please Login or try with a different email address')

    const hashedPassword = await hashPassword(password)

    await new Admin({
        name, email:email.toLowerCase(), password:hashedPassword
    }).save()

    res.status(200).json({success:true, message:"User registration successfull"})
})
const login = asyncErrorHandler(async(req, res)=>{
    const {email, password} = req.body
    if(!email || !password) throw new CustomError("Necessary details are not filled", 404)

    const admin = await Admin.findOne({email})
    if(!admin) throw new CustomError("User does not exist", 404)

    if(!await comparePassword(password, admin.password)) throw new CustomError("Password does not match", 400)

    const token = generateToken({_id:admin._id})

    res.status(200).json({
        success:true,
        message:"Login successfull",
        admin:{
            _id:admin._id,
            name:admin.name,
            email:admin.email,
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