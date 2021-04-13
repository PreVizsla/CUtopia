const User = require('../models/User')
const Education = require('../models/User')
const Experience = require('../models/User')
const ErrorResponse = require("../utils/errorResponse");

// Albert
// DO we want to have photo for posts? Yes
// yes - I guess
// ALBERT
// We have class? YES 



//Add the ability to check a person's profile
exports.showInfo = (req, res, next) => {
    User.findOne({_id: req.params.id})
    .then(result => res.status(200).send(result))
    .catch(err => {
        return next(new ErrorResponse("The user is not found", 400));
    })
}

//Checking whether the user can edit the profile or not
//exports.checkUser = (req, res, next) => {
    //const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    //if (!(authorized)) {
      //return res.status('403').json({
        //error: "User is not authorized"
      //})
    //}
    //next() 
//}

exports.getProfileID = async (req, res, next) => {
    User.findOne({ _id: req.params.profileId })
    .then(results => res.status(200).send(results))
    .catch(err => {
        return next(new ErrorResponse(err, 400))
    })
}

//Add the ability to edit profile
exports.editProfile = (req, res, next) => {
    User.findOneAndUpdate({photo: req.body.photo, city : req.body.city, country : req.body.country,
    occupation : req.body.occupation, about : req.body.about})
    .then(() => res.sendStatus(204)
    .catch(error => {
        return next(new ErrorResponse(error, 400));
    })
  )
}

//Add the ability to add Education
exports.addEducation = async (req, res, next) => {
  let school =  req.body.school
  let major = req.body.major

  if(!school && !major){
      return next(new ErrorResponse("You need to fill the School and Major", 400))
  }
  
  var educationData = {school: school, major: major, startYear: req.body.startYear,
      endYear: req.body.endYear, description: req.body.description}

  Education.createData(educationData)
  User.findOne({_id: req.params.id})
  .populate('education.username', '_id name')
  .then(result => res.status(200).send(result))
  .catch(error => {
      return next(new ErrorResponse(error, 400))
  })

}

//Add the ability to delete Education
exports.deleteEducation = async (req, res, next) => {
    Education.findOneAndDelete({"education._id" : req.params.id})
    .then(() => res.sendStatus(202))
    .catch(error => {
        return next(new ErrorResponse(error, 400))
    })
}

//Add the ability to add Experience
exports.addExperience = async (req, res, next) => {
    let company =  req.body.company
    let title = req.body.title

    if(!company && !title){
      return next(new ErrorResponse("You need to fill the Company and Title", 400))
    }
  
    var experienceData = {company: company, title: title, startYear: req.body.startYear,
        endYear: req.body.endYear, description: req.body.description }
    
    Experience.createData(experienceData)
    User.findOne({_id: req.params.id})
    .populate('experience.username', '_id name')
    .then(result => res.status(200).send(result))
    .catch(err => {
        return next(new ErrorResponse(err, 400));
    })
}

//Add the ability to delete Experience
exports.deleteExperience = async (req, res, next) => {
    Experience.findOneAndDelete({"experience._id" : req.params.id})
    .then(() => res.sendStatus(202))
    .catch(error => {
        return next(new ErrorResponse(error, 400));
    })
}
