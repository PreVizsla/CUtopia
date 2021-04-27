const Jobs = require('../models/Jobs')
const ErrorResponse = require('../utils/ErrorResponse')

exports.showJobs = async (req, res) => {
    try{
        const jobList = await Jobs.find();
        res.status(200).json(jobList);
    } catch (error) {
        res.status(404).json( { message: error.message } );
    }
}

exports.createJob = async (req, res) => {
    // const { jobName, companyName, location, description } = req.body;
    const jobs = req.body;

    const newJob =  new Jobs(jobs);

    try {
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(409).json( { message: error.message } );
    }
}