"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("student", {
			...ZygoteModel,
			studentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentNim: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentEmail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentIsRegistered: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			studentDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentDepartmentName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			studentStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentStudyProgramName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			studentMbkmProgramId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			studentTranskripId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			studentSksTotal: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: 0,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("student");
	},
};
