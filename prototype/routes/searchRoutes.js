const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require('../schemas/UserSchema');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//used to create payload for each user 
router.get("/", (req, res, next) => {
    var payload = createPayload(req.session.user)
    res.status(200).render("searchPage", payload);
})

//used to create payload for each user when the selectedTab is clicked
router.get("/:selectedTab", (req, res, next) => {
    var payload = createPayload(req.session.user)
    payload.selectedTab = req.params.selectedTab;
    res.status(200).render("searchPage", payload);
})

function createPayload(userLoggedIn) {
    return {
        pageTitle: "Search",
        userLoggedIn: userLoggedIn,
        userLoggedInJs: JSON.stringify(userLoggedIn)
    };
}

module.exports = router;
