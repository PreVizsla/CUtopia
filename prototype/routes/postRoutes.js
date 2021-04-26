const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// to get all posts of users using payload
router.get("/:id", (req, res, next) => {

    var payload = {
        pageTitle: "View post",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
        postId: req.params.id
    }
    
    res.status(200).render("postPage", payload);
})

module.exports = router;
