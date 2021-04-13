const express = require('express')
const profileCtrl = require('../controllers/profile')
const { searchPost, searchPostById, feedPost, create, comment, like, editComment, removePost, removeComment} = require('../controllers/post')

const router = express.Router()

//Router of searchPost
router.route('/posts/search').get(searchPost)

//Router of searchPostByID
router.route('/posts/search/by/:postId').get(searchPostById)

//Router of feedPost
router.route('/posts/feed/:profileId').get(feedPost)

//Router of createPost
router.route('/posts/create').post(create)

//Router of createComment
router.route('/posts/:postId/comment').post(comment)

//Router of like
router.route('/posts/like').put(like)

//Router of editComment
router.route('/posts/:postId/:commentId/edit').put(editComment)

//Router of removePost
router.route('/posts/:postId').delete(removePost)

//Router of removePost
router.route('/posts/:postId/:commentId').delete(removeComment)

router.param('profileId', profileCtrl.getProfileID)
router.param('postId', postByID)
router.param('commentId', commentID)

module.exports = router

//TODO check this