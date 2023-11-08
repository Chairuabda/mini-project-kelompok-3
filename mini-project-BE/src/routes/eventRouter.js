const express = require("express");
const router = express.Router();

const {
	eventAttendeesController,
	eventController,
	eventLocationController,
	eventCategoryController,
	createEventController,
	eventDetailController,
	eventUserController,
} = require("../controllers/eventController");

router.post("/attendees", eventAttendeesController);
router.get("/", eventController);
router.get("/detail-event/:id", eventDetailController);
router.get("/location", eventLocationController);
router.get("/category", eventCategoryController);
router.post("/createevent", createEventController);
router.get("/user/:userId", eventUserController);

module.exports = router;
