//Middleware for authenticating the users with the help of tokens
const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[0];
    const isCustomAuth = token.length < 500;
    
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id;  
    }
    else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
