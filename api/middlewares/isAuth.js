const { validateToken } = require('../helpers/jwt')
const asyncErrorHandler = require("express-async-handler")
const Admin = require('../models/admin')
const CustomError = require('../utils/CustomError')

const isAuthenticated = asyncErrorHandler(async(req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token) throw new CustomError("No Token Provided")
    const decoded = validateToken(token)
    const admin = await Admin.findById(decoded._id).select('_id name role')
    if(!admin) throw new CustomError("User not found")
    req.admin = admin
    next()
})

module.exports = {
    isAuthenticated,
}