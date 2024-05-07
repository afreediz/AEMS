const asyncErrorHandler = require("express-async-handler")
const CustomError = require('../utils/CustomError')
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

const sendMail = asyncErrorHandler(async(req, res) => {
    const { email, subject, message } = req.body;
    console.log(req.body);
    if(!email || !subject || !message){
        throw new CustomError('Necessary details are not filled', 404)
    }
    const mailOptions = {
        from: process.env.SMTP_USER,
        to: email,
        subject: subject,
        text: message
    };

    // Send email
    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw new CustomError(error.message, 400)
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({
                success: true,
                message: 'Email sent successfully'
            })
        }
    });
});

module.exports = { sendMail }