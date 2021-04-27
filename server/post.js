const express = require('express')
const profileCtrl = require('../controllers/profile')
const { searchPost, searchPostById, feedPost, create, comment, like, editComment, removePost, removeComment} = require('../controllers/post')

const router = express.Router()

//Router of searchPost
router.get('/search', searchPost)

//Router of searchPostByID
//router.get('/search/by/:postId', searchPostById)

//Router of feedPost
router.get('/feed/:profileId', feedPost)

//Router of createPost
router.post('/create', create)

//Router of createComment
//router.post('/:postId/comment', comment)

//Router of like
router.put('/:postId/like', like)

//Router of editComment
//router.put('/:postId/:commentId/edit', editComment)

//Router of removePost
router.delete('/:postId', removePost)

//Router of removePost
//router.delete('/:postId/:commentId', removeComment)

module.exports = router

//TODO check this