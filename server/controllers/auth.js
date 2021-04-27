const crypto = require("crypto");
const bcrypt = require("bcrypt");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
const config = require("../config/auth")

const secret = config.SECRET;

// Login 
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find User from the database
    User.findOne({ email: email }).then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      else {
        // compare the hash with the selected password
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Invalid credentials"});
        }
        else {
          if (user.status != "Active") {
            return res.status(401).send({ message: "Pending account. Please verify your email "});
          }
          else {
            const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });

            return res.status(200).json({ user: { email: user.email, user: user.username}, token });
          }
        }
      }
    })
    // const oldUser = await User.findOne({ email });

    // if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    // const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    // if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    // res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.logout = async (req, res, next) => {
//   try {
//     User.findOne({  })
//   }
// }

// Register
exports.register = async (req, res) => {
  const { name, username, email, password, firstname, lastname, major, end_year, mentor_mentee } = req.body;

  try {
    User.findOne({ email: email }).then( user => {
      if (user) {
        return res.status(400).json({ message: "User already registered" })
      }
      else {
        const token = jwt.sign( { email: email }, secret, { expiresIn: "1h" } );
        // Hash the password with 16 rounds of bcrypt hashing
        const hashedPassword = bcrypt.hashSync(password, 16);

        const newUser = new User({
          name: name,
          username: username,
          email: email, 
          password: hashedPassword,
          firstname: firstname,
          lastname: lastname,
          major: major,
          gradYear: end_year,
          isMentor: mentor_mentee,
          confirmationCode: token
        });
        newUser.save((err) => {
          if (err){
            res.status(500).json({ message: err.message });
            return;
          }
          res.status(201).send({ message: "User was registered successfully" })
        });
        // send the confirmation email (based from the inserted information)
        confirmationEmail(
          newUser.username,
          newUser.email, 
          newUser.confirmationCode
        )
      }
    });
    // const oldUser = await User.findOne({ email });

    // if (oldUser) return res.status(400).json({ message: "User already exists" });

    // const hashedPassword = await bcrypt.hash(password, 16);

    // const result = await User.create({ username, email, password: hashedPassword });

    // const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    // res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
    
    console.log(error);
  }
};

// here
// exports.details = async (req, res, next) => {
//   const { firstname, lastname, major, gradYear, isMentor  } = req.body;

//   try{
//     const result = User.findOneandUpdate({ _id: req.session.user._id },  { firstname: firstname, lastname: lastname,  major: major, gradYear: gradYear, isMentor: isMentor });
//     res.status(200).json({ result });
//   } catch (err) {
//     res.status(500).json({ message: err.message});
//   }
// }

// @desc Send confirmation email
const confirmationEmail = (name, email, confirmationCode) => {

    const resetUrl = `http://localhost:3000/confirm/${confirmationCode}`

    const message = `
    <h1> Hello ${name} </h1>
    <h2>You have requested an account opening on CUtopia</h1>
      <p>Please click <a href=${resetUrl} clicktracking=off>at the following link</a></p>
      
      <b>Do not reply to this email</b>
   `;
    try {
      sendEmail({
        to: email,
        subject: "Account Creation Request",
        text: message,
      });
    }
    catch (err){
      console.log(err.message);
    } 
    
  }

// verify user (after they clicked the confirmation email)
exports.verifyUser = (req, res, next) => {
  User.findOne({ 
    where: { confirmationCode: req.query.confirmationCode },
  })
  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'User not found'})
    }
    user.status = "Active";
    user.save((err) => {
      if (err) {
        res.status(500).json({ message: err.message})
        return;
      }
    });
  })
  .catch(err => res.status(500).json({ message: err.message }))
}
  
// @desc    Forgot Password Initialization
exports.forgotPassword = async (req, res, next) => {
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Hash token (private key) and save to database
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Set token expire date
    user.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

    await user.save();

    // Create reset url to email to provided email
    const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

    // HTML Message
    const message = `
      <h1> Hello ${user.username} </h1>
      <h2>You have requested an account opening on CUtopia</h1>
      <p>Please click  <a href=${resetUrl} clicktracking=off>at the following link</a></p>
     

      <b>Do not reply to this email</b>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: "Password Reset Request",
        text: message,
      });

      res.status(200).json({ success: true, data: "Email Sent" });
    } catch (err) {
      console.log(err);

      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      return next(new ErrorResponse("Email could not be sent", 500));
    }
  } catch (err) {
    next(err);
  }
};

// @desc    Reset User Password
exports.resetPassword = async (req, res, next) => { 
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken: req.query.resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = bcrypt.hashSync(req.body.password,16);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ success: true, token });
};
