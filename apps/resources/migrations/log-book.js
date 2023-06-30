"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("log_book", {
			...ZygoteModel,
			logBookId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookReportFile: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookReportWeek: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			logBookStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookStudentName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookStudentNim: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookStudyProgramName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			logBookDepartmentName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("log_book");
	},
};
