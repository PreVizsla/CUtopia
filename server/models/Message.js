const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: String, required: true }
})

const Message = mongoose.model("Message", schema);

module.exports = Message;