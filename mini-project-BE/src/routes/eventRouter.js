const express = require("express")
const router = express.Router();

const { eventAttendeesController } = require("../controllers/eventAttendeesController")

router.post("/attendees", eventAttendeesController)

module.exports = router;