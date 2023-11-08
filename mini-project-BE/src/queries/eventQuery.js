const db = require("../models");
const attendees = db.event_attendees;
const event = db.event;
const cities = db.city;
const user = db.user;
const category = db.category;
const { Op } = require("sequelize");

const eventQuery = async (
	title = null,
	categoryId = null,
	cityId = null
) => {
	try {
		const params = {};
		if (categoryId) params.categoryId = categoryId;
		if (cityId) params.cityId = cityId;
		if (title)
			params.title = {
				[Op.like]: `%${title}%`,
			};
		const res = await event.findAll({
			include: [
				{ model: user },
				{ model: cities },
				{ model: category },
			],
			where: {
				...params,
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};

const eventDetailQuery = async (id) =>{
  try {
    const res = await event.findByPk(id, {
      include : [user]
    })

    return res
  } catch (err) {
    throw err
  }
}

const eventUserQuery = async (userId) =>{
  try {
    const res = await event.findAll({
      where : [
        {userId : userId}
      ]
    })

    return res
  } catch (err) {
    throw err
  }
}

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

const eventLocationQuery = async (city = null) => {
	try {
		const filter = {};
		if (city)
			filter.city = {
				[Op.like]: `%${city}%`,
			};
		const res = await cities.findAll({
			where: {
				...filter,
			},
		});

    return res;
  } catch (err) {
    throw err;
  }
};

const eventCategoryQuery = async () => {
  try {
    const res = await category.findAll();

    return res;
  } catch (err) {
    throw err;
  }
};

const createEventQuery = async (
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
) => {
  try {
    const res = await event.create({
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
    });

    return res;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  eventAttendeesQuery,
  eventQuery,
  eventLocationQuery,
  eventCategoryQuery,
  createEventQuery,
  eventDetailQuery,
  eventUserQuery
};
