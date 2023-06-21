"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("department", {
			...ZygoteModel,
			departmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			departmentName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			departmentEmail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			departmentIsRegistered: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("department");
	},
};
