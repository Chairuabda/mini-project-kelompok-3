module.exports = (sequelize, Sequelize) => {
	const event_attendees = sequelize.define(
		"event_attendees",
		{
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone_number: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			date_of_birth: {
				type: Sequelize.STRING,
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
		},
		{
			timestamps: false,
			tableName: "event_attendees",
		}
	);

	// user.associate = (models) => {
	// 	user.hasMany(models.event, { foreignKey: "userId" });
	// };

	return event_attendees;
};
