const express = require("express");
const router = express.Router();

const {
	registerController,
	loginController,
	keepLoginController
} = require("../controllers/authController");

const { verifyToken } = require("../middleware/auth")

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/keep-login",verifyToken, keepLoginController);

module.exports = router;