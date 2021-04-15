//Schema for storing the details and properties of messages sent by users in MongoDB database
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sender: { type: Schema.Types.objectId, ref: 'User' },
    message: { type: String, required: [true, 'Insert a message']},
    chat: {type: Schema.Types.objectId, ref: 'Chat'},
    readBy: [{ type: Schema.Types.objectId, ref: 'User'}]
}, { timestamps: true });

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;
