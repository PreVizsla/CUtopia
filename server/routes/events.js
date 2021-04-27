const { showEvents, createEvent } = require('../controllers/events');
const express = require('express');

const router = express.Router();

//Route for showing events
router.get('/', showEvents)

//Route for creating events
router.post('/', createEvent)

module.exports = router