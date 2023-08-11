"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("sks_convertion_student", {
			...ZygoteModel,
			sksConvertionStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionStudentStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionStudentSksConvertionId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionStudentSksConvertionSchemaId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionStudentMatkulId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionStudentStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionStudentMbkmProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("sks_convertion_student");
	},
};
