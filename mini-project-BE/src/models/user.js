module.exports = (sequelize, Sequelize) => {
	const user = sequelize.define(
		"user",
		{
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			username: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			fullname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			coin: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			avatar: {
				type: Sequelize.STRING
			}
		},
		{
			timestamps: false,
			tableName: "users",
		}
	);

	user.associate = (models) => {
		user.hasMany(models.event, { foreignKey: "userId" });
	};

	return user;
};
