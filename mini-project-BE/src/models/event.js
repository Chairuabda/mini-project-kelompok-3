module.exports = (sequelize, Sequelize) => {
	const event = sequelize.define(
		"events",
		{
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
				allowNull: false,
			},
			max_capacity: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			banner: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: "events",
		}
	);

	// user.associate = (models) => {
	// 	user.hasMany(models.event, { foreignKey: "userId" });
	// };

	return event;
};
