const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../schemas/UserSchema')

app.set("view engine", "pug");
app.set("views", "pugviews");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {

    res.status(200).render("register");
})

router.post("/", async (req, res, next) => {
    
    // storing details of the user by request method
    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var email = req.body.email.trim();
    var username = req.body.username.trim();
    var password = req.body.password;

    var payload = req.body;

    var checkemail = false;
    
    // regular expression to check for user email authenticity
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        //Email valid. Procees to test if it's from the right domain (Second argument is to check that the string ENDS with this domain, and that it doesn't just contain it)
        if(email.indexOf("@link.cuhk.edu.hk", email.length - "@link.cuhk.edu.hk".length) !== -1){
            //VALID
            checkemail=true;
        }
    }
    // condition that verifies user for registration 
    if(firstName && lastName && checkemail && username && password) {
        var user = await User.findOne({
            $or: [
                { email: email },
                { username: username }
            ] 
        })
        .catch((error) => {
            console.log(error);
            payload.errorMessage = "Something went wrong.";
            res.status(200).render("register", payload);
        });

        if(user == null) {
            // No user found

            var data = req.body;

            data.password = await bcrypt.hash(password, 10);

            User.create(data)
            .then((user) => {
                req.session.user = user;
                return res.redirect("/");
            })

        }
        else {
            // User found with given credentials
            if(email == user.email) {
                payload.errorMessage = "Account already exists with the given email id.";
            }
            else {
                payload.errorMessage = "Account already exists with the given username.";
            }
            res.status(200).render("register", payload);
        }
    }
    else {
        if(checkemail==false) {
            payload.errorMessage = "Enter your @link.cuhk.edu.hk email address.";
            res.status(200).render("register", payload);
        }
        else {
            payload.errorMessage = "Make sure each field has a valid value.";
            res.status(200).render("register", payload);
        }
    }
})

module.exports = router;
