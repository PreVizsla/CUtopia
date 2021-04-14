const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Text is required']
  }, 
  photo: {
    data: Buffer,
    contentType: String
  },
  likes: [{
      type: mongoose.Schema.ObjectId, 
      ref: 'User'
  }],
  comments: [{
    type: Schema.Types.ObjectId, ref: 'Comments'
  }],
}, { timestamps: true });

const CommentsSchema = new Schema ({
  username: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: [true, 'Text is required']
  },
  likes: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
}, { timestamps: true });

const Post = mongoose.model("Post", PostSchema);
const Comments = mongoose.model("Comment", CommentSchema);

module.exports = { Post, Comments };