const {
	eventAttendeesService,
} = require("../services/eventAttendeesService");

const eventAttendeesController = async (req, res) => {
	try {
		const { name, email, phone_number, date_of_birth, gender, referral_code } = req.body;

    const result = await eventAttendeesService(name, email, phone_number, date_of_birth, gender, referral_code)

    res.status(200).json({
      message: "Attendees ditambahkan",
      data: result,
    })

	} catch (err) {
		res.status(500).send(err.message);
	}
};

module.exports = { eventAttendeesController }