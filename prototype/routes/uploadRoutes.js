const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const path = require("path");
const User = require('../schemas/UserSchema');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//express app that gets the unique image path for each user
router.get("/images/:path", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../uploads/images/" + req.params.path));
})

module.exports = router;
