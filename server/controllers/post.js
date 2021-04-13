const { Post, Comments } = require('../models/Post')
const Profile = require('../models/Profile')
const ErrorResponse = require("../utils/errorResponse");

//Search post (GET)
exports.searchPost =  async(req, res, next) => {

  var searchObj = req.query;

  if(searchObj.isReply !== undefined) {
    var isReply = searchObj.isReply == "true";
    searchObj.comments = { $exists: isReply };
    delete searchObj.isReply;
  }

  if(searchObj.search !== undefined) {
    searchObj.content = { $regex: searchObj.search, $options: "i" };
    delete searchObj.search;
  }

  var result = await getPosts(searchObj);
  res.status(200).send(result);
}

//Search post by id (GET)
exports.searchPostByID = async (req, res, next, id) => {
 
  var postId = req.params.id;
  var postData = await getPosts({_id: postId });
  postData = postData[0];

  var result = { postData: postData }

  if(postData.comments !== undefined) {
    result.comments = postData.comments;

    if(result.comments.content != null) {
      const postBody = result.comments.content

      const textToArr = postBody.split(" ")

      textToArr.forEach((word, index) => {
        if(word.match(/\bhttps?/i)) {
          word = `<p><a href="${word}" class="postLink" target="_blank" style="color: #007bff;">${word}</a></p>`
          textToArr[index] = word
        }
        else if(!word.match(/\bhttps?/i) && word.indexOf("www") !== -1) {
          word = `<p><a href="https://${word}" class="postLink" target="_blank" style="color: #007bff;">${word}</a></p>`
          textToArr[index] = word
        }
      })

      result.comments.content = textToArr.join(" ")
    }
  }

  result.replies = await getPosts({ comments: postId });

  res.status(200).send(result);
}

//Load the Post (GET) 
exports.feedPost = async (req, res) => {
  let following = req.session.user.following
  following.push(req.session.user.id)
  try{
    // ini masih salah juga
    let posts = await Post.find({username: { $in : req.session.user.following } })
                          .populate('comments.username', '_id name') //isn't this one already loading the comments(?)
                          .populate('username', '_id name') //i dont think we need to have a separate get for comments(?)
                          .sort('-created')
                          .exec()
    res.json(posts)
  }catch(err){
    return next(new ErrorResponse(err, 400));
  }
}


//Create the Post (POST)
exports.create = (req, res, next) => {
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
  
  Post.findByIdAndUpdate(req.body.postId, {$push: {comments: comment}}, {new: true})
  .populate('username')
  .populate('comments')
  .then(() => res.sendStatus)
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

//exports.isPoster = (req, res, next) => {
  //let isPoster = req.post && req.auth && req.post.username._id == req.auth._id
  //if(!isPoster){
    //return next(new ErrorResponse("User is not authorized", 403));
  //}
//}

exports.postByID = async (req, res, next) => {
  Post.findOne({_id: req.params.postId})
  .then(result => res.status(200).send(result))
  .catch(err => {
    return next(new ErrorResponse(err, 400));
  })
}

// TODO: this one
exports.commentID = async (req, res, next) => {
  Comments.findOne({_id: req.params.commentId})
  .then(result => res.status(200).send(result))
  .catch(err => {
    return next(new ErrorResponse(err, 400));
  })
}

//ini masih salah
async function getPosts(filter) {
    var results = await Post.find(filter)
    .populate("username")
    .populate("comments")
    .sort({ "createdAt": -1 })
    .then(results => { 
      results = await Profile.populate(results, { path: "comments.username"})

      results.forEach(post => { // Can Add Links in the Post
          if(post.content != null) {
              const postBody = post.content
     
              const textToArr = postBody.split(" ")
     
              textToArr.forEach((word, index) => {
                  if(word.match(/\bhttps?/i)) {
                      word = `<p><a href="${word}" class="postLink" target="_blank" style="color: #007bff;">${word}</a></p>`
                      textToArr[index] = word
                  }
                  else if(!word.match(/\bhttps?/i) && word.indexOf("www") !== -1) {
                      word = `<p><a href="https://${word}" class="postLink" target="_blank" style="color: #007bff;">${word}</a></p>`
                      textToArr[index] = word
                  }
              })
     
              post.content = textToArr.join(" ")
          }
      })
    })
    .catch( error =>{
      return next(new ErrorResponse(error, 400));
    })
}

