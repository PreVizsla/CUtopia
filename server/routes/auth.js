const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

// Controllers
const { register,
        login,
        forgotPassword,
        verifyUser,
        resetPassword } = require("../controllers/auth")

router.post("/register", register);
router.post("/login", login);
// router.post("/logout", logout);
router.post("/forgetpassword", forgotPassword);
router.get("/confirm/:confirmationCode", verifyUser)
router.put("/passwordreset/:resetToken", resetPassword);

module.exports = router;