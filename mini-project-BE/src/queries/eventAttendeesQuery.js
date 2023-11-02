const db = require("../models");
const attendees = db.event_attendees;

const eventAttendeesQuery = async (
	name = null,
	email = null,
	phone_number = null,
	date_of_birth = null,
	gender = null,
  referral_code = null
) => {
	try {
		await db.sequelize.transaction(async (t) => {
			await attendees.create({
				name,
				email,
				phone_number,
				date_of_birth,
				gender,
				isCancelled: false,
        referral_code,
			});
		});
	} catch (err) {
		throw err;
	}
};

module.exports = { eventAttendeesQuery };
