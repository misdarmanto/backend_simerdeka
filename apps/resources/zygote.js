const moment = require("moment");
const Sequelize = require("sequelize");

const ZygoteModel = {
	id: {
		type: Sequelize.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	createdOn: {
		type: Sequelize.DATE,
		allowNull: false,
		defaultValue: moment().format("YYYY-MM-DD HH:mm:ss"),
	},
	modifiedOn: {
		type: Sequelize.DATE,
		allowNull: true,
	},
	deleted: {
		type: Sequelize.TINYINT,
		allowNull: false,
		defaultValue: 0,
	},
};

module.exports = { ZygoteModel };
