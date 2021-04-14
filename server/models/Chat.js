const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
    chatname: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    latestMessage: { type: Schema.Types.ObjectId, ref: 'Message'}
}, { timestamps: true });

const Chat = mongoose.model('Chat', ChatSchema);

module.exports = Chat;