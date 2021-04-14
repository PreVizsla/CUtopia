const express = require('express');
const { getUnopenedMessage, 
        getLatest,
        markIDasRead,
        markAsOpen } = require('../controllers/notification');

const router = express.Router();

//TODO this