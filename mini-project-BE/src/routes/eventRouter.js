const express = require("express");
const router = express.Router();

const {
	eventAttendeesController,
	eventController,
	eventLocationController,
	eventCategoryController,
} = require("../controllers/eventController");

router.post("/attendees", eventAttendeesController);
router.get("/", eventController);
router.get("/location", eventLocationController);
router.get("/category", eventCategoryController);

module.exports = router;
