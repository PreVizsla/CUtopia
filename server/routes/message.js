const express = require("express");
const router = express.Router();

const { createMessage } = require('../controllers/message');
const { createChatRoom , 
        findChatRoom,
        getChatID,
        updateChat,
        getMessages,
        readMessage
} = require('../controllers/chat');

router.route("/chat/:chatId").post(createMessage);

router.route("/chat").post(createChatRoom);

router.route("/chat").get(findChatRoom);

router.route("/chat/:chatId").get(getChatID);

router.route("/chat/:chatId").put(updateChat);

router.route("/chat/:chatId/messages").get(getMessages);

router.route("/chat/:chatId/messages/markAsRead").put(readMessage);

module.exports = router;
