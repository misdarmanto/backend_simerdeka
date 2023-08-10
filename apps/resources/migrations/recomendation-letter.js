"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("recomendation_letter", {
			...ZygoteModel,
			recomendationLetterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterStudentTranskrip: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterDosenWali: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterSyllabus: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			recomendationLetterApprovalLetter: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterSptjmLetter: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterFromStudyProgram: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			recomendationLetterFromDepartment: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			recomendationLetterFromLp3m: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			recomendationLetterFromAcademic: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			recomendationLetterProgramName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterProgramDescription: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterProgramCorrelation: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			recomendationLetterStatus: {
				type: Sequelize.ENUM("waiting", "accepted", "rejected"),
				allowNull: true,
				defaultValue: "waiting",
			},
			recomendationLetterStatusMessage: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			recomendationLetterAssignToStudent: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			recomendationLetterAssignToStudyProgram: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			recomendationLetterAssignToDepartment: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			recomendationLetterAssignToLp3m: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			recomendationLetterAssignToAcademic: {
				type: Sequelize.BOOLEAN,
				allowNull: true,
				defaultValue: false,
			},
			recomendationLetterSemesterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("recomendation_letter");
	},
};
