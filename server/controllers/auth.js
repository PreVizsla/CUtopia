const crypto = require("crypto");
const bcrypt = require("bcrypt");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");

const secret = "test";

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    User.findOne({ email: email }).then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      else {
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Invalid credentials"});
        }
        else {
          // if (user.status != "Active") {
          //   return res.status(401).send({ message: "Pending account. Please verify your email "});
          // }
          // else {
            const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });

            return res.status(200).json({ user: { email: user.email, user: user.username}, token });
          // }
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

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    User.findOne({ email: email }).then( user => {
      if (user) {
        return res.status(400).json({ message: "User already registered" })
      }
      else {
        const hashedPassword = bcrypt.hashSync(password, 16);

        const newUser = new User({
          username: username,
          email: email, 
          password: hashedPassword
        });
        newUser.save()
        const token = jwt.sign( { email: newUser.email, id: newUser._id }, secret, { expiresIn: "1h" } );
        res.status(201).json({ newUser: { email: username, email: email}, token: token });
      }
    })
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
exports.details = async (req, res, next) => {
  const { firstname, lastname, major, gradYear, isMentor  } = req.body;

  try{
    const result = User.findOneandUpdate({ _id: req.session.user._id },  { firstname: firstname, lastname: lastname,  major: major, gradYear: gradYear, isMentor: isMentor });
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
}

// @desc Send confirmation email
exports.confirmationEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Email not found" });
    }
    else {
      const resetToken = crypto.randomBytes(20).toString("hex");
      user.ConfirmationEmail =
    }
  }
  catch (err) {
    res.status(500).json({ message: err.message})
  }
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
    const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

    // HTML Message
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please make a put request to the following link:</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
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
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
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
