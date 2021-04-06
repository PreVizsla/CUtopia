const mongoose = require("mongoose");
const { Socket } = require('../utils/socket');

const Message = require("../models/Message");
const Group = require("../models/Group");
const User = require("../models/User");

const fetchMessage = async(req, res, next) => {
    const gid = req.params.gid;

    let group;
    try {
        group = await Group.findById(gid).populate('messages');
    } catch (error) {
        return next(new Error('Could not find room by id:' + error));
    }
    res.json({ message: 'Messages fetched', messages: group.messages });
};

const sendMessage = async (req, res, next) => {
    const { username, text, image, uid, date } = req.body;

    let user;
    try {
        user = await User.findById(uid);
    } catch (error) {
        return next(new Error('Could not find user by id:' + error))
    }

    const newMessage = new Message({
        username,
        text,
        image,
        date
    });
    
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newMessage.save({ session: session });
        group.messages.push(newMessage);
        await group.save({ session: session });
        await session.commitTransaction();
    }  catch (error) {
        return next(new Error('Message transaction failed'));
    }
    
    res.json({ message: 'Message sent' });
    //TODO: add Socket.io message service either here or message-service.js
}

exports.fetchMessage = sendMessage
exports.sendMessage = sendMessage;