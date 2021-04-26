const express = require('express')
const app = express()
const router = express.Router()
const User = require("../schemas/UserSchema")
const nodemailer = require('nodemailer');
const uuid = require("uuid-random")
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// used for password reset
router.get("/", (req, res, next) => {
    res.status(200).render("requestReset")
})

router.post("/", async (req, res, next) => {
 
    if(!req.body)
        return
    
    const payload = req.body
    const findEmail = req.body.resetEmail.trim()
 
    const getUser = await User.findOne({email: findEmail})
    .catch(() => {
        payload.statusMessage = "Something went wrong. Please try again."
        return res.status(400).render("requestReset", payload)
    })
 
    if(getUser == null) {
        payload.statusMessage = "No user found. Please use the email address you used when registering your account"
        return res.status(400).render("requestReset", payload)
    }
 
    else {
 
        const checkForField = await User.updateOne({email: findEmail}, [{$set:{"resetPassword": { $cond: [ { $not: ["$resetPassword"] }, "", "$resetPassword" ]}}}])
        .catch(() => {
            payload.statusMessage = "Something went wrong. Please try again."
            return res.status(400).render("requestReset", payload)
        })
 
        const checkForPreviousReset = await User.findOne({email: findEmail}).select("resetPassword")
        .catch(() => {
            payload.statusMessage = "Something went wrong. Please try again."
            return res.status(400).render("requestReset", payload)
        })
 
        if(checkForPreviousReset.resetPassword !== "") {
            payload.statusMessage = "You have already requested a password change. Please check your inbox"
            return res.status(400).render("requestReset", payload)
        }
 
        const uniqueId = uuid()
 
        const updateUser = await User.findOneAndUpdate({email: findEmail}, {resetPassword: uniqueId})
        .catch(() => {
            payload.statusMessage = "Something went wrong. Please try again."
            return res.status(400).render("requestReset", payload)
        })
        
        // defining the transporter using details provided by nodemailer
        var transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "3038e41bb14ca1",
              pass: "51c476e246a079"
            }
        });
     
        // defining the details of password reset email sent to users
        var mailOptions = {
            from: 'admin@cutopia.hk',
            to: findEmail,
            subject: 'Password change',
            html: `You're request for password change. 
            <p>Please click the following to change your password:</p>
            <a href="http://localhost:3006/passwordReset?id=${uniqueId}">Click here</a>
            <br><br>If it doesn't work, please use the following link to change you're password:
            <p>http://localhost:3006/passwordReset?id=${uniqueId}</p>
            `
            
        }
       
        // to verify identity of user on the platform and send email after that for password reset
        transporter.sendMail(mailOptions, async function(error, info){
            if (error) {
                const updateUser = await User.findOneAndUpdate({email: findEmail}, {resetPassword: ""})
                .catch(() => {
                    payload.statusMessage = "Something went wrong. Please try again."
                    return res.status(400).render("requestReset", payload)
                })
                payload.statusMessage = "Something went wrong. Please try again"
                return res.status(400).render("requestReset", payload)
            } else {
            console.log('Email sent: ' + info.response)
            }
        })
 
        payload.statusMessage = "We have sent you an email with a link to reset your password. If you don't see it in your inbox, please check your spam folder"
        return res.status(200).render("requestReset", payload)
    }
})
 
module.exports = router
