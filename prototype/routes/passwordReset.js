const express = require('express')
const app = express()
const router = express.Router()
const User = require("../schemas/UserSchema")
const bcrypt = require('bcrypt')
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
router.get("/", async(req, res, next) => {
    const payload = req.body
    if(Object.keys(req.query).length === 0){
        payload.statusMessage = "Broken link"
        return res.status(400).render("passwordReset", payload)
        
    }
    const id = req.query.id
 
    const getUser = await User.findOne({resetPassword: {$regex: id}}).select("id firstName")
    .catch(() => {
        payload.statusMessage = "Something went wrong. Please try again."
        return res.status(400).render("passwordReset", payload)
    })
 
    if(getUser == null) {
        payload.statusMessage = "Broken link"
        return res.status(400).render("passwordReset", payload)
    }
    else {
        payload.name = getUser.firstName
        return res.status(200).render("passwordReset", payload)
    }
})
 
router.post("/", async(req, res, next) => {
    const payload = req.body
    const password = req.body.password
    const confirmPass = req.body.confirmPassword
 
    const id = req.query.id
 
    const getUser = await User.findOne({resetPassword: {$regex: id}}).select("id firstName")
    .catch(() => {
        payload.statusMessage = "Something went wrong. Please try again."
        return res.status(400).render("passwordReset", payload)
    })
 
    if(getUser == null) {
        payload.statusMessage = "Broken link"
        return res.status(400).render("passwordReset", payload)
    }
    else {
         payload.name = getUser.firstName
        if(password !== confirmPass) {
            payload.statusMessage = "Passwords are not the same"
            return res.status(400).render("passwordReset", payload)
        }
        else {
            const newPassword = await bcrypt.hash(password, 10)
            const changePass = await User.findByIdAndUpdate(getUser._id, {password: newPassword})
            .catch(() => {
                payload.statusMessage = "Something went wrong. Please try again."
                return res.status(400).render("passwordReset", payload)
            })
            const removeRequest = await User.findByIdAndUpdate(getUser._id, {resetPassword: ""})
            .catch(() => {
                payload.statusMessage = "Something went wrong. Please try again."
                return res.status(400).render("passwordReset", payload)
            })
 
            payload.statusMessage = "Password succesfully updated!"
            return res.status(200).render("passwordReset", payload)
        }       
    }
})
 
module.exports = router