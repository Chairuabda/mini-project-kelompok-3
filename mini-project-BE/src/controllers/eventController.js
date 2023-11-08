const {
	eventAttendeesService,
	eventService,
	eventLocationService,
	eventCategoryService,
	createEventService,
	eventDetailService,
	eventUserService
} = require("../services/eventService");

const eventController = async (req, res) => {
	try {
		const { title, categoryId, cityId } = req.query;
		const result = await eventService(title, categoryId, cityId);
		res.status(200).json({
			message: "Event success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const eventDetailController = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await eventDetailService(id);
		res.status(200).json({
			message: "Event success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const eventUserController = async (req, res) => {
	try {
		const { userId } = req.params;
		const result = await eventUserService(userId);
		res.status(200).json({
			message: "Event success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const eventAttendeesController = async (req, res) => {
	try {
		const {
			name,
			email,
			phone_number,
			date_of_birth,
			gender,
			referral_code,
		} = req.body;

		const result = await eventAttendeesService(
			name,
			email,
			phone_number,
			date_of_birth,
			gender,
			referral_code
		);
		console.log(result);
		res.status(200).json({
			message: "Attendees ditambahkan",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const eventLocationController = async (req, res) => {
	try {
		const { city } = req.query;
		const result = await eventLocationService(city);

		res.status(200).json({
			message: "Get Event by Location Success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};
const eventCategoryController = async (req, res) => {
	try {
		const result = await eventCategoryService();

		res.status(200).json({
			message: "Get Event by Location Success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

const createEventController = async (req, res) => {
	try {
		const {
			title,
			description,
			cityId,
			address,
			start_date,
			end_date,
			start_time,
			end_time,
			isComplate,
			userId,
			categoryId,
		} = req.body;
		const result = await createEventService(
			title,
			description,
			cityId,
			address,
			start_date,
			end_date,
			start_time,
			end_time,
			isComplate,
			userId,
			categoryId
		);

		res.status(200).json({
			message: "Create Event Success",
			data: result,
		});
	} catch (err) {
		res.status(500).send(err.message);
	}
};

module.exports = {
	eventAttendeesController,
	eventController,
	eventLocationController,
	eventCategoryController,
	createEventController,
	eventDetailController,
	eventUserController
};
