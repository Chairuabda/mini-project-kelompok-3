module.exports = (sequelize, Sequelize) => {
	const category = sequelize.define(
		"categories",
		{
			category: {
        type: Sequelize.STRING,
        allowNull: false
      }
		},
		{
			timestamps: false,
			tableName: "categories",
		}
	);

	// user.associate = (models) => {
	// 	user.hasMany(models.event, { foreignKey: "userId" });
	// };

	return category;
};
