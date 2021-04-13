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

const router = express.Router()

router.route('/profile/:profileId').get(showInfo)

router.route('/profile/:profileId/edit').post(editProfile)

router.route('/profile/:editPhoto').post(editPhoto)

router.route('/profile/:profileId/addeducation').put(addEducation)

router.route('/profile/:profileId/deleteeducation').delete(deleteEducation)

router.route('/profile/:profileId/addexperience').put(addExperience)

router.route('/profile/:profileId/deleteexperience').delete(deleteExperience)

router.param('profileId', getProfileID)

module.exports = router