"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("report_participation", {
			...ZygoteModel,
			reportParticipationId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			reportParticipationLetter: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			reportParticipationStatusMessage: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			reportParticipationStatus: {
				type: Sequelize.ENUM("waiting", "accepted", "rejected"),
				allowNull: true,
				defaultValue: "waiting",
			},
			reportParticipationStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			reportParticipationDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			reportParticipationStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			reportParticipationSemesterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("report_participation");
	},
};
