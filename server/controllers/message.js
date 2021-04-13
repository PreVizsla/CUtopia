const User = require('../models/User');
const Message = require('../models/Message');
const Chat = require('../models/Chat');
const ErrorResponse = require("../utils/errorResponse");

exports.createMessage = async (req, res, next) => {
    if (!req.body.message || !req.body.chatId) {
        return next(new ErrorResponse("Invalid data passed into request", 400));
    }

    var newMessage = {
        sender: req.session.user._id,
        message: req.body.message,
        chat: req.body.chatId,
        readBy: [req.session.user._id]
    };

    Message.create(newMessage)
    .then(async (message) => {
        message = await message.populate("sender").execPopulate();
        message = await message.populate("chat").execPopulate();
        message = await User.populate(message, { path: "chat.users" });
        
        var chat = await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message })
        .catch(e => {
            return next(new ErrorResponse(e,400));
        });

        insertNotification(chat, message);

        res.status(201).send(message);
    })
    .catch(e => {
        return next(new ErrorResponse(e,400));
    });
}

function insertNotification(chat, message) {
    chat.users.forEach(userId => {
        if (userId === message.sender._id.toString()) return;
        Notification.insertNotification(userId, message.sender._id, "newMessage", message.chat._id);
    });
}