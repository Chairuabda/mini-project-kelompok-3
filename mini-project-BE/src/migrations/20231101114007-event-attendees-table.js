"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("event_attendees", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone_number: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			date_of_birth: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			gender: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			isCancelled: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			referral_code: {
				type: Sequelize.STRING,
				allowNull: false,
			}
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("event_attendees");
	},
};
