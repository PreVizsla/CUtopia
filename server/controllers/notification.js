const Notification = require('../models/Notification');
const ErrorResponse = require('../utils/errorResponse')

exports.getUnopenedMessage = async (req, res, next) => {
    var searchObj = { userTo: req.session.user._id, notificationType: { $ne: "newMessage" }}

    if (req.query.unreadOnly !== undefined && req.query.unreadOnly == "true") {
        searchObj.opened = false;
    }

    Notification.find(searchObj)
    .populate("userTo")
    .populate("userFrom")
    .sort({ createdAt: -1 })
    .then(results => {res.status(200).send(results)})
    .catch(err => {
        return next(new ErrorResponse(err, 400));
    })
}

exports.getLatest = async (req, res, next) => {
    Notification.findOne({ userTo: req.session.user._id })
    .populate("userTo")
    .populate("userFrom")
    .sort({ createdAt: -1 })
    .then(results => { res.status(200).send(results) })
    .catch(err => {
        return next(new ErrorResponse(err, 400));
    })
}

exports.markIDasRead = async (req, res, next) => {
    Notification.findByIdAndUpdate(req.params.id, { opened: true })
    .then(() => res.sendStatus(204))
    .catch(err => {
        return next(new ErrorResponse(err, 400))
    })
}

exports.markAsOpen = async (req, res, next) => {
    Notification.updateMany({ userTo: req.session.user._id}, { opened: true })
    .then(() => res.sendStatus(204))
    .catch(err => {
        return next(new ErrorResponse(err, 400))
    })
}
