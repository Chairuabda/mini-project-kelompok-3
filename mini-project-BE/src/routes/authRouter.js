const express = require("express");
const router = express.Router();

const {
	registerController,
	loginController,
	keepLoginController,
	updateController
} = require("../controllers/authController");

const { uploadAvatar } = require("../middleware/multer")

const { verifyToken } = require("../middleware/auth")

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/keep-login",verifyToken, keepLoginController);
router.patch("/update-profile/:id", uploadAvatar, updateController)

module.exports = router;