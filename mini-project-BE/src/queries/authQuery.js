const db = require("../models");
const user = db.users;
// const { Op } = require("sequelize");

const registerQuery = async (
	username = null,
	email = null,
	password = null,
	fullname = null
) => {
	try {
		await db.sequelize.transaction(async (t) => {
			await user.create({
				username,
				email,
				password,
				fullname,
				coin: 0,
			});
		});
	} catch (err) {
		throw err;
	}
};

module.exports = { registerQuery };
