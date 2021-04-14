import mongoose from 'mongoose'

const jobSchema = mongoose.Schema({
    position: String,
    companyName: String,
    location: String,
    detail: String
})

var JobMessage 