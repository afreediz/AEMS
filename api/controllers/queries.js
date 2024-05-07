const Query = require('../models/queries/queries')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const getQueries = asyncErrorHandler(async(req, res)=>{
    const queries = await Query.find({})
    res.status(200).json({
        success:true,
        queries
    })
})

const addQueries = asyncErrorHandler(async(req, res)=>{
    const {name, email, query} = req.body;
    if(!name || !email || !query){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await new Query({
        name, email, query
    }).save()
    res.status(200).json({
        success:true,
        message:"Query added successfully"
    })
})

const deleteQueries = asyncErrorHandler(async(req, res)=>{
    await Query.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"Query deleted successfully"
    })
})

module.exports = {
    getQueries,
    addQueries,
    deleteQueries
}