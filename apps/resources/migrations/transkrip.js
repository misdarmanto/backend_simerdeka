"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("transkrip", {
			...ZygoteModel,
			transkripId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			transkripStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			transkripMataKuliahId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			transkripStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			transkripDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			transkripMataKuliahGrade: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("transkrip");
	},
};
