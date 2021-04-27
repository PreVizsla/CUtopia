const { showJobs, createJob } = require('../controllers/jobs');
const express = require('express');

const router = express.Router();

//Route for showing events
router.get('/', showJobs);

//Route for creating events
router.post('/', createJob);

module.exports = router;