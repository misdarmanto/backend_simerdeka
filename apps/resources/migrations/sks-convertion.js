"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("sks_convertion", {
			...ZygoteModel,
			sksConvertionId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionTotal: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			sksConvertionStudentId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionMbkmProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("sks_convertion");
	},
};
