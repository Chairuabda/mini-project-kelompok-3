"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("events", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			location: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			start_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			end_date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			start_time: {
				type: Sequelize.TIME,
				allowNull: false,
			},
			end_TIME: {
				type: Sequelize.DATE,
				allowNull: false,
			},
      isComplate: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }, 
      max_capacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      banner: {
        type: Sequelize.STRING,
        allowNull: false,
      }
		});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("events");
	},
};
