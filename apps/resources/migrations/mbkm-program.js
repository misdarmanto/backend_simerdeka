"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("mbkm_program", {
			...ZygoteModel,
			mbkmProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramCreatedBy: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramCategory: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			mbkmProgramSyllabus: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			mbkmProgramSemesterId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("mbkm_program");
	},
};
