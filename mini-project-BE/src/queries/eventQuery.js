const db = require("../models");
const attendees = db.event_attendees;
const event = db.event;
const city = db.city;
const user = db.user;
const category = db.category;
const { Op } = require("sequelize");

const eventQuery = async (categoryId = null, cityId = null) => {
  try {
    const params = {};
    if (categoryId) params.categoryId = categoryId;
    if (cityId) params.cityId = cityId;
    const res = await event.findAll({
      include: [{ model: user }, { model: city }, { model: category }],
      where: {
        ...params,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

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

const eventLocationQuery = async () => {
  try {
    const res = await city.findAll();

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
};
