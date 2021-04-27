const User = require('../models/User')
const Education = require('../models/User')
const Experience = require('../models/User')
const ErrorResponse = require("../utils/errorResponse");
const formidable = require("formidable")
const fs = require('fs')

//Add the ability to check a person's profile
exports.showInfo = (req, res, next) => {
    User.findOne({ _id: req.params.id })
    .then(result => res.status(200).send(result))
    .catch(err => {
        return next(new ErrorResponse("The user is not found", 400));
    })
}

//Add the ability to get profileID
exports.getProfileID = async (req, res, next) => {
    User.findOne( { _id: req.params.profileId } )
    .then(results => res.status(200).send(results))
    .catch(err => {
        return next(new ErrorResponse(err, 400))
    })
}

//Add the ability to edit profile
exports.editProfile = (req, res, next) => {
    const { city, country, occupation, about} = req.body;
    User.findOneAndUpdate( { _id : res.session.user._id }, { city : city, country : country, occupation : occupation, about:about})
    .then(() => res.sendStatus(202)
    .catch(error => {
        return next(new ErrorResponse(error, 400));
    })
  )
}

//Add the ability to edit Profile Picture
exports.editPhoto = (req, res, next) => {
    var form = formidable.incomingForm()
    form.parse(req, (error, fields, files))
    .then(
        User.photo.data = fs.readFileSync(files.photo.path),
        User.photo.contentType = files.photo.type,

        res.status(202).send("Your photo has changed")
    )
    .catch(error => {
        return next(new ErrorResponse("The image couldn't be uploaded", 400))
    })
}

//Add the ability to add Education
exports.addEducation = async (req, res, next) => {
    var form = Formidable.incomingForm()
    form.parse(req, (error, fields, files))
    .then(
        Education.photo.data = fs.readFileSync(files.photo.path),
        Education.photo.contentType = files.photo.type,

        res.status(202).send("Your photo has changed")
    )
    .catch(error => {
        return next(new ErrorResponse("The image couldn't be uploaded", 400))
    })

  let school =  req.body.school
  let major = req.body.major

  if(!school && !major){
      return next(new ErrorResponse("You need to fill the School and Major", 400))
  }
  const { startYear, endYear, description } = req.body;

  var educationData = { school: school, major: major, startYear: startYear, endYear: endYear, description: description }

  Education.createData(educationData)
  User.findOne( { _id: req.params.id } )
  .populate('education.username', '_id name')
  .then(result => res.status(200).send(result))
  .catch(error => {
      return next(new ErrorResponse(error, 400))
  })

}

//Add the ability to edit Education
exports.editEducation = async (req, res, next) => {
    const { photo, school, major, startYear, endYear, description } = req.body;

    Education.fineOneAndUpdate({_id : req.session.user.education._id},  { photo: photo, school: school, major: major, startYear: startYear , endYear: endYear, description: description })
    .then(() => res.send(202).status("Accepted!"))
    .catch( error =>  {
        return next(new ErrorResponse( error, 400));
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
    var form = Formidable.incomingForm()
    form.parse(req, (error, fields, files))
    .then(
        Experience.photo.data = fs.readFileSync(files.photo.path),
        Experience.photo.contentType = files.photo.type,

        res.status(202).send("Your photo has changed")
    )
    .catch(error => {
        return next(new ErrorResponse("The image couldn't be uploaded", 400))
    })

    let company =  req.body.company
    let title = req.body.title

    if(!company && !title){
      return next(new ErrorResponse("You need to fill the Company and Title", 400))
    }
    const { startYear, endYear, description } = req.body;

    var experienceData = { company: company, title: title, startYear: startYear, endYear: endYear, description: description }
    
    Experience.createData(experienceData)
    User.findOne({_id: req.params.id})
    .populate('experience.username', '_id name')
    .then(result => res.status(200).send(result))
    .catch(err => {
        return next(new ErrorResponse(err, 400));
    })
}

//Add the ability to edit Experience
exports.editEducation = async (req, res, next) => {
    const { photo, company, title, startYear, endYear, description } = req.body;

    Experience.fineOneAndUpdate({_id : req.session.user.experience._id},  { photo: photo, company: company, title: title, startYear: startYear , endYear: endYear, description: description })
    .then(() => res.send(202).status("Accepted!"))
    .catch( error =>  {
        return next(new ErrorResponse( error, 400));
    })
}

//Add the ability to delete Experience
exports.deleteExperience = async (req, res, next) => {
    Experience.findOneAndDelete( { "experience._id" : req.params.id } )
    .then(() => res.sendStatus(202))
    .catch(error => {
        return next(new ErrorResponse(error, 400));
    })
}