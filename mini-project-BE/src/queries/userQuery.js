const db = require("../models");
const { Op } = require("sequelize");
const user = db.user;

const findUserQuery = async ({  username = null, email = null }) => {
  try {
    const res = await user.findOne({
      where: {
        [Op.or]: {
					username,
          email,
        },
      },
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  findUserQuery,
};
