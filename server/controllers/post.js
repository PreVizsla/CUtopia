const { Post, Comments } = require('../models/Post')
const Profile = require('../models/Profile')
const ErrorResponse = require("../utils/errorResponse");

//Search post (GET)
exports.searchPost =  async(req, res, next) => {

  var searchObj = req.query;

  if(searchObj.search !== undefined) {
    searchObj.content = { $regex: searchObj.search, $options: "i" };
    delete searchObj.search;
  }

  var result = await getPosts(searchObj);
  res.status(200).send(result);
}

//Load the Post (GET) 
exports.feedPost = async (req, res) => {
    try {
        const postMessages = await Post.find();       
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Create the post 
exports.create = (req, res, next) => {
  var form = Formidable.incomingForm()
    form.parse(req, (error, fields, files))
    .then(
        Post.photo.data = fs.readFileSync(files.photo.path),
        Post.photo.contentType = files.photo.type,

        res.status(202).send("Your photo has changed")
    )
    .catch(error => {
        return next(new ErrorResponse("The image couldn't be uploaded", 400))
    })
  
  let text =  req.body.text
  if (!text) {
    return next(new ErrorResponse("There is no text in the post", 400));
  }
  var postData = {
    text: text,
    username: req.session.username,
    photo: req.body.photo
  }
  if(req.body.comments) {
    postData.comments = req.body.comments;
  }

  Post.create(postData)
  .then(async newPost => {
    newPost = await Profile.populate(newPost, { path: "username" })
    newPost = await Profile.populate(newPost, { path: "comments" })

    if(newPost.comments !== undefined) {
      await Notification.insertNotification(newPost.replyTo.username, req.session.user._id, "reply", newPost._id);
    }

    res.status(201).send(newPost);
  })
  .catch(err => {
    return next(new ErrorResponse(err, 400));
  })
}

//Ability to like the post (PUT)
exports.like = async (req, res, next) => {
  
  var postID = req.params.id;
  var userID = req.session.user._id;

  var isLiked = req.session.user && req.session.user.likes.includes(Post._id);

  var option = isLiked ? "$pull" : "$addToSet";
  
  var post =  await Post.findByIdAndUpdate(Post._id, { [option]: { likes: Profile. _id} }, { new: true })
  .catch(error => {
    return next(new ErrorResponse(error, 400));
  })

  if(!isLiked) {
    await Notification.insertNotification(Post.username, "postLike", Post._id);
  }

  res.status(200).send(post)
}

//Add the ability to comment on the post (POST) 
exports.comment = async (req, res) => {
  let comment = req.body.comment
  comment.username = req.body.userId
  try{
    Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
    .populate('username')
    .populate('comments')
    .exec()
    res.json(result)
  }catch(err){
    return next(new ErrorResponse(err, 400));
  }
}

//Edit the post (PUT)
exports.editPost = (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(204))
  .catch(err => {
    return next(new ErrorResponse(err, 400));
  })
}

//Edit the comment (PUT) 
exports.editComment = (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(204))
  .catch(error => {
    return next(new ErrorResponse(error, 400));
  })
}

//Delete the Post (DELETE)
exports.removePost = async (req, res) => {
  Post.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(202))
  .catch(error => {
    return next(new ErrorResponse(error, 400));
  })
}

//Delete comment (DELETE) 
exports.removeComment = async (req, res, next) => {
  Comments.findByIdAndDelete(req.params.id)
  .then(() => res.sendStatus(202))
  .catch(error => {
    return next(new ErrorResponse(error, 400));
  })
}