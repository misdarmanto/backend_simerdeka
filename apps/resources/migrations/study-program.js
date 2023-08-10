"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("study_program", {
			...ZygoteModel,
			studyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studyProgramName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studyProgramEmail: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studyProgramIsRegistered: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			studyProgramDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studyProgramDepartmentName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			studyProgramSemesterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("study_program");
	},
};
