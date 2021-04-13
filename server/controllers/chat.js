const Chat = require('../models/Chat');
const User = require('../models/User');
const Profile = require('../models/Profile');
const Message = require('../models/Message');
const ErrorResponse = require('../utils/errorResponse');
const { Profile } = require('../models/Profile');

// line 12 - 38
exports.createChatRoom = async (req, res, next) => {
    if (!req.body.users) {
        return next(new ErrorResponse("Users param not sent with request", 400));
    }

    const users = JSON.parse(req.body.users);

    if(users.length === 0) {
        return next(new ErrorResponse("Users array is empty", 400));
    }
    
    users.push(req.session.user);

    var chatData = {
        users: users,
        isGroupChat: true,
    }

    Chat.createData(chatData)
    .then(result => res.status(200).send(result))
    .catch(err => {
        return next(new ErrorResponse(err, 400));
    });
}

// line 40 - 58
exports.findChatRoom = async (req, res, next) => {
    Chat.find({ users: { $elemMatch: { $eq: req.session.user._id } }})
    .populate("users")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async results => {
        if(req.query.unreadOnly !== undefined && req.query.unreadOnly == "true") {
            results = results.filter(r => r.latestMessage && !r.latestMessage.readBy.includes(req.session.user._id));
        }

        results = await Profile.populate(results, { path: "latestMessage.sender" });
        res.status(200).send(results);
    })
    .catch(err => {
        return next(new ErrorResponse(err, 400));
    });
}

// 60
exports.getChatID = async (req, res, next) => {
    Chat.findOne({ _id: req.params.chatId, users: { $elemMatch: { $eq: req.session.user._id } }})
    .populate("users")
    .then(results => res.status(200).send(results))
    .catch(err => {
        return next(new ErrorResponse(err, 400))
    });
}

// 70
exports.updateChat = async (req,res,next) => {
    Chat.findByIdAndUpdate(req.params.chatId, req.body)
    .then(() => res.sendStatus(204))
    .catch(err => {
        return next(new ErrorResponse(err, 400))
    });
}

exports.getMessages = async (req,res,next) => {
    Message.find({ chat: req.params.chatId })
    .populate("sender")
    .then(results => res.status(200).send(results))
    .catch(err => {
        return next(new ErrorResponse(err,400));
    })
}

exports.readMessage = async (req, res, next) => {
    Message.updateMany({ chat: req.params.chatId }, { $addToSet: {readBy: req.session.user._id } })
    .then(() => res.sendStatus(204))
    .catch(err => {
        return next(new ErrorResponse(err,400));
    })
}