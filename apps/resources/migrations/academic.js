"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("academic", {
			...ZygoteModel,
			academicId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			academicName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			academicEmail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("academic");
	},
};
