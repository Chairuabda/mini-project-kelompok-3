module.exports = (sequelize, Sequelize) => {
	const city = sequelize.define(
		"city",
		{
			city: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		},
		{
			timestamps: false,
			tableName: "cities",
		}
	);

	city.associate = (models) => {
		city.hasMany(models.event, { foreignKey: "cityId" });
	};

	return city;
};
