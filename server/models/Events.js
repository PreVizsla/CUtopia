const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    title: {type: String, required: false},
    eventDate: {type: String, required: false},
    location: {type: String, required: false},
    description: {type: String, required: false},
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event;
