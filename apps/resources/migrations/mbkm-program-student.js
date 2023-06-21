"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("mbkm_program_student", {
			...ZygoteModel,
			mbkmProgramStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramStudentSks: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			studentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			majorId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			studyProgramId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			semesterId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("mbkm_program_student");
	},
};
