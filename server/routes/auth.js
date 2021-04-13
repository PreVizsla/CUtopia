const express = require("express");
const router = express.Router();

// Controllers
const { register,
        login,
        forgotPassword,
        resetPassword } = require("../controllers/auth")

router.post("/register", register);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.put("/passwordreset/:resetToken", resetPassword);

module.exports = router;