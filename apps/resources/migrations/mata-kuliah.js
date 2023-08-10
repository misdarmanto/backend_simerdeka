"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("mata_kuliah", {
			...ZygoteModel,
			mataKuliahId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mataKuliahName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mataKuliahStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mataKuliahStudyProgramName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mataKuliahDepartmentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mataKuliahDepartmentName: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			mataKuliahSksTotal: {
				type: Sequelize.INTEGER,
				allowNull: true,
				defaultValue: 0,
			},
			mataKuliahSemesterId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("mata_kuliah");
	},
};
