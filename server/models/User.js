//Schema for storing the details of Cutopians, their job, education and experience details in MongoDB database
const crypto = require("crypto");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  email: {
    type: String,
    required: [true, "Please provide email address"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  status: { type: String, enum: ['Pending', 'Active'], default: 'Pending' },
  confirmationCode: { type: String, unique: true },
  confirmationCodeExpire: { type: Date },
  name: { type: String, required: false },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  photo: { data: Buffer, contentType: String },
  isMentor: { type: Boolean, required: false },
  major: { type: String, required: false },
  gradYear: { type: String, required: false },
  country: { type: String, required: false },
  city: { type: String, required: false },
  occupation: { type: String, required: false },
  about: { type: String, required: false },
  education: [{ type: mongoose.Schema.ObjectId, ref:'Education', required: false }],
  experience: [{ type: mongoose.Schema.ObjectId, ref: 'Experience', required: false }]
});

const educationSchema = new mongoose.Schema({
    photo: { data: Buffer, contentType: String },
    school: {type: String, required: false },
    major: {type: String, required: false },
    startYear: {type: Date, required: false},
    endYear: {type: Date, default: Date.now, required: false},
    description: {type: String, required: false}
});

const experienceSchema = new mongoose.Schema({ 
    photo: {data: Buffer, contentType: String},
    company: {type: String, required: false},
    title: {type: String, required: false},
    startYear: {type: Date, required: false},
    endYear: {type: Date, default: Date.now, required: false},
    description: {type: String, required: false}
});

const User = mongoose.model("User", UserSchema);
const Education = mongoose.model("Education", educationSchema);
const Experience = mongoose.model("Experience", experienceSchema);

module.exports = User;

