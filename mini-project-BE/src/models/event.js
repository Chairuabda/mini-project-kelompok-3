module.exports = (sequelize, Sequelize) => {
	const event = sequelize.define(
		"event",
		{
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			cityId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			address: {
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
				type: Sequelize.TIME,
				allowNull: false,
			},
			isComplate: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			banner: {
				type: Sequelize.STRING,
				// allowNull: false,
			},
			categoryId: {
				type: Sequelize.INTEGER,
				allowNull: false,
			}
		},
		{
			timestamps: false,
			tableName: "events",
		}
	);

	event.associate = (models) => {
		event.belongsTo(models.city, { foreignKey: "cityId" });
		event.belongsTo(models.user, { foreignKey : "userId" })
		event.belongsTo(models.category, { foreignKey : "categoryId" })
	};

	return event;
};
