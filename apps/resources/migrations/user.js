"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user", {
			...ZygoteModel,
			userId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userEmail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			userRole: {
				type: Sequelize.ENUM(
					"student",
					"studyProgram",
					"department",
					"lp3m",
					"academic"
				),
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("user");
	},
};
