const {
	eventAttendeesService,
	eventService,
	eventLocationService,
	eventCategoryService
} = require("../services/eventService");

const eventController = async (req, res) => {
	try {
		const {categoryId, cityId } = req.query;
		const result = await eventService(categoryId, cityId)
		res.status(200).json({
			message: "Event success",
			data: result,
		})
	} catch (err) {
		res.status(500).send(err.message)
	}
}

const eventAttendeesController = async (req, res) => {
	try {
		const { name, email, phone_number, date_of_birth, gender, referral_code } = req.body;

    const result = await eventAttendeesService(name, email, phone_number, date_of_birth, gender, referral_code)
		console.log(result)
    res.status(200).json({
      message: "Attendees ditambahkan",
      data: result,
    })

	} catch (err) {
		res.status(500).send(err.message);
	}
};

const eventLocationController = async (req, res) => {
	try {
		const result = await eventLocationService()

		res.status(200).json({
			message: "Get Event by Location Success",
			data: result
		})
	} catch (err) {
		res.status(500).send(err.message)
	}
}
const eventCategoryController = async (req, res) => {
	try {
		const result = await eventCategoryService()

		res.status(200).json({
			message: "Get Event by Location Success",
			data: result
		})
	} catch (err) {
		res.status(500).send(err.message)
	}
}



module.exports = { eventAttendeesController, eventController, eventLocationController, eventCategoryController }