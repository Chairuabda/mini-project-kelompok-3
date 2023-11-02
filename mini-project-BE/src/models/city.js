module.exports = (sequelize, Sequelize) => {
	const city = sequelize.define(
		"cities",
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

	// user.associate = (models) => {
	// 	user.hasMany(models.event, { foreignKey: "userId" });
	// };

	return city;
};
