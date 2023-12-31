module.exports = (sequelize, Sequelize) => {
	const category = sequelize.define(
		"category",
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

	category.associate = (models) => {
		category.hasMany(models.event, { foreignKey: "categoryId" });
	};

	return category;
};
