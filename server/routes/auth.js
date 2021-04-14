const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

// Controllers
const { register,
        login,
        details,
        forgotPassword,
        resetPassword } = require("../controllers/auth")

router.post("/register", register);
router.post("/login", login);
router.post("/details", details);
router.post("/forgotPassword", forgotPassword);
router.put("/passwordreset/:resetToken", resetPassword);

module.exports = router;