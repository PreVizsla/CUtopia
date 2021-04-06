const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  photo: {
    data: Buffer,
    contentType: String,
    ref: 'User'
  },
  text: {
    type: String,
    required: 'Text is required'
  },
  likes: [{
      type: mongoose.Schema.ObjectId, 
      ref: 'User'
  }],
  comments: [{
    text: {
      type: String,
      required: 'Text is required'
    },
    createdOn: { 
      type: Date, 
      default: Date.now 
    },
    postedBy: { type: mongoose.Schema.ObjectId, ref: 'User'}
  }],
  created: {
    type: Date,
    default: Date.now
  }
})

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
