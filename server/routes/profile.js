const { showInfo, 
    editProfile, 
    addEducation, 
    deleteEducation,
    addExperience,
    deleteExperience,
    editPhoto
    } = require("../controllers/profile")

const express = require('express')

const auth = require('../middleware/auth')

const router = express.Router()

//Route for show information of a user's profile
router.get('/profile/:profileId', auth, showInfo)

//Route for edit profile
router.post('/profile/:profileId/edit', auth, editProfile)

//Route for edit profile picture
router.post('/profile/:editPhoto', auth, editPhoto)

//Route for add education
router.put('/profile/:profileId/addeducation', auth, addEducation)

//Route for edit education
router.post('/profile/:profileId/editeducation', auth, editEducation)

//Route for delete education
router.delete('/profile/:profileId/:educationId', auth, deleteEducation)

//Route for add experience
router.put('/profile/:profileId/addexperience', auth, addExperience)

//Route for editing experience
router.post('/profile/:profileId/editexperience', auth, editExperience)

//Route for delete experience
router.delete('/profile/:profileId/:experienceId', auth, deleteExperience)

module.exports = router