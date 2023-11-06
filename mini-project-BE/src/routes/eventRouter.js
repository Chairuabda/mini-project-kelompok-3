const express = require("express");
const router = express.Router();

const {
	eventAttendeesController,
	eventController,
	eventLocationController,
	eventCategoryController,
	createEventController,
} = require("../controllers/eventController");

router.post("/attendees", eventAttendeesController);
router.get("/", eventController);
// router.get("/eventLocation/:id", eventLocationController)
router.get("/location", eventLocationController);
router.get("/category", eventCategoryController);
router.post("/createevent", createEventController);

module.exports = router;
