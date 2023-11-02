const {
	eventAttendeesQuery,
} = require("../queries/eventAttendeesQuery");

const eventAttendeesService = async (
	name,
	email,
	phone_number,
	date_of_birth,
	gender,
  referral_code
) => {
	try {
		const res = await eventAttendeesQuery(
			name,
			email,
			phone_number,
			date_of_birth,
			gender,
      referral_code
		);

		return res;
	} catch (err) {
		throw err;
	}
};

module.exports = { eventAttendeesService };
