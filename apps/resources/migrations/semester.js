"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("semester", {
			...ZygoteModel,
			semesterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			semesterCreatedBy: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			semesterName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			semesterStatus: {
				type: Sequelize.ENUM("active", "non-active"),
				allowNull: true,
				defaultValue: "active",
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("semester");
	},
};
