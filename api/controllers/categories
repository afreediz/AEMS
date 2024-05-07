const Category = require('../models/categories')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')
const slugify = require('slugify')

const getCategories = asyncErrorHandler(async(req, res)=>{
    const categories = await Category.find({})
    res.status(200).json({
        success:true,
        categories
    })
})

const addCategories = asyncErrorHandler(async(req, res)=>{
    const {name} = req.body;
    if(!name){
        throw new CustomError('Necessary details are not filled', 404)
    }
    const category = await new Category({
        name,
        slug:slugify(name)
    }).save()
    console.log('saved')
    res.status(200).json({
        success:true,
        message:"Category added successfully",
        category
    })
})

const updateCategories = asyncErrorHandler(async(req, res)=>{
    const {name, slug} = req.body;
    if(!name || !slug){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Category.findByIdAndUpdate(req.params.id, {
        name, slug
    })
    res.status(200).json({
        success:true,
        message:"Category updated successfully"
    })
})

const deleteCategories = asyncErrorHandler(async(req, res)=>{
    await Category.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"Category deleted successfully"
    })
})

module.exports = {
    getCategories,
    addCategories,
    updateCategories,
    deleteCategories
}