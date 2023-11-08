const { where } = require("sequelize");
const db = require("../models");
const user = db.user;
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
				coin: 5000,
			});
		});
	} catch (err) {
		throw err;
	}
};

const keepLoginQuery = async (id) => {
	try {
		const res = await user.findByPk(id, {
			attributes: {
				exclude: ["password"],
			},
		});

		return res;
	} catch (err) {
		throw err;
	}
};

const updateQuery = async (
	username,
	email,
	fullname,
	avatar,
	id
) => {
	try {
		await db.sequelize.transaction(async (t) => {
			await user.update(
				{
					username,
					email,
					fullname,
					avatar,
				},
				{
					where: {
						id,
					},
				}
			);
		});
		console.log(username);
		console.log(fullname);
		console.log(email);
		console.log(avatar);
		console.log(id);
	} catch (err) {
		console.log(err);
		throw err;
	}
};

module.exports = { registerQuery, keepLoginQuery, updateQuery };
