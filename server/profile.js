const { showInfo, 
    checkUser, 
    editProfile, 
    addEducation, 
    deleteEducation,
    addExperience,
    deleteExperience,
    getProfileID,
    editPhoto
    } = require("../controllers/profile")

const express = require('express')

const auth = require('../middleware/auth')

const router = express.Router()

// router.route('/profile/:profileId').get(showInfo)
router.get('/profile/:profileId', auth, showInfo)

// router.route('/profile/:profileId/edit').post(editProfile)
router.post('/profile/:profileId/edit', auth, editProfile)

// router.route('/profile/:editPhoto').post(editPhoto)
router.post('/profile/:editPhoto', auth, editPhoto)

// router.route('/profile/:profileId/addeducation').put(addEducation)
router.put('/profile/:profileId/addeducation', auth, addEducation)

router.post('/profile/:profileId/editeducation', auth, editEducation)

// router.route('/profile/:profileId/:educationId').delete(deleteEducation)
router.delete('/profile/:profileId/:educationId', auth, deleteEducation)

// router.route('/profile/:profileId/addexperience').put(addExperience)
router.put('/profile/:profileId/addexperience', auth, addExperience)

router.post('/profile/:profileId/editexperience', auth, editExperience)

// router.route('/profile/:profileId/deleteexperience').delete(deleteExperience)
router.delete('/profile/:profileId/:experienceId', auth, deleteExperience)

module.exports = router