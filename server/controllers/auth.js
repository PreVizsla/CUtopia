const crypto = require("crypto");
const { argon2i } = require("argon2-ffi");  
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");

const secret = "test";


// @desc    Login user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const oldUser = await User.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    var encodedHash = "$argon2i$v=19$m=4096,t=3,p=1$c2FsdHlzYWx0$oG0js25z7kM30xSg9+nAKtU0hrPa0UnvRnqQRZXHCV8";

    const isPasswordCorrect = await argon2i.verify(encodedHash, this.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
};

// exports.logout = async (req, res, next) => {

//   return res.status('200').json({ 
//     message: "signed out"
//   })
// }

// @desc    Register user
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const oldUser = await User.findOne({ email: email });

    if (oldUser) return res.status(400).json({ message: "User already registered" })

    const salt = await crypto.randomBytes(32);

    const hashedPassword = await argon2i.hash(password, salt);

    const result = await User.create({ username, email, password: hashedPassword });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "1h" });
    
    res.status(201).json( { result, token }); 

  } catch (err) {
    res.status(500).json({ message: err.message });

    console.log(err)
  }
};

// here
exports.details = async (req, res, next) => {
  const { name, major, graduation, mentee  } = req.body;

  const result = await User.findOneandUpdate({ email }, {name: req.body.name, major: req.body.major, 
    endYear: req.body.endYear, isMajor: req.body.major});
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
