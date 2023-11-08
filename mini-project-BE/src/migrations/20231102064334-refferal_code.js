"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cities", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			refferal_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      isUsed: {
        type: Sequelize.BOOLEAN,
      }
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("cities");
	},
};
