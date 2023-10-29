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

module.exports = { registerQuery, keepLoginQuery };
