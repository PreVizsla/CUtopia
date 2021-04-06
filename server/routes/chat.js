const express = require('express');
const router = express.Router();

const controllers = require('../controllers/message-controller');

router.route('/chat/:gid').get(controllers.fetchMessage);
router.route('/chat').post(controllers.sendMessage);

module.exports = router;