const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/", (req,res,next) => {
    
    if(req.session) {
        req.session.destroy(() => {
            res.redirect("/login");
        })
    }
})

module.exports = router;