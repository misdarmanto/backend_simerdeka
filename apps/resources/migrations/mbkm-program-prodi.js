"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("mbkm_program_prodi", {
			...ZygoteModel,
			mbkmProgramProdiId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramProdiProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mbkmProgramProdiStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			mbkmProgramProdiStudyProgramName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			mbkmProgramProdiDepartmentId: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			mbkmProgramProdiDepartmentName: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			mbkmProgramProdiSemesterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("mbkm_program_prodi");
	},
};
