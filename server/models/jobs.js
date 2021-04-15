//Schema for storing the details of jobs in MongoDB database
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    jobName: {type: String, required: false},
    companyName: {type: String, required: false},
    location: {type: String, required: false},
    description: {type: String, required: false}
})

const Jobs = mongoose.model("Jobs", jobSchema)

module.exports = Jobs;
