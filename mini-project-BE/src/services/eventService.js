const {
	eventAttendeesQuery,
	eventQuery,
	eventLocationQuery,
	eventCategoryQuery
} = require("../queries/eventQuery");


const eventService = async (categoryId, cityId) => {
	try {
		const res = eventQuery(categoryId, cityId)
		return res
	} catch (err) {
		throw err
	}
}


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


const eventLocationService = async () => {
	try {
		const res = await eventLocationQuery()
		return res
	} catch (err) {
		throw err;
	}
}

const eventCategoryService = async () => {
	try {
		const res = await eventCategoryQuery()
		return res
	} catch (err) {
		throw err;
	}
}


module.exports = { eventAttendeesService, eventService, eventLocationService, eventCategoryService };
