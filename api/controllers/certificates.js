const Certificate = require('../models/certificates')
const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')

const getCertificates = asyncErrorHandler(async(req, res)=>{
    const certificates = await Certificate.find({})
    res.status(200).json({
        success:true,
        certificates
    })
})

const addCertificates = asyncErrorHandler(async(req, res)=>{
    const {name, email, certificate} = req.body;
    if(!name || !email || !certificate){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Certificate({
        name, email, certificate
    }).save()
    res.status(200).json({
        success:true,
        message:"Certificate added successfully"
    })
})

const updateCertificates = asyncErrorHandler(async(req, res)=>{
    const {name, email, certificate} = req.body;
    if(!name || !email || !certificate){
        throw new CustomError('Necessary details are not filled', 404)
    }
    await Certificate.findByIdAndUpdate(req.params.id, {
        name, email, certificate
    })
    res.status(200).json({
        success:true,
        message:"Certificate updated successfully"
    })
})

const deleteCertificates = asyncErrorHandler(async(req, res)=>{
    await Certificate.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success:true,
        message:"Certificate deleted successfully"
    })
})

module.exports = {
    getCertificates,
    addCertificates,
    updateCertificates,
    deleteCertificates
}