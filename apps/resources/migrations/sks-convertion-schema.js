"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("sks_convertion_schema", {
			...ZygoteModel,
			sksConvertionSchemaId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionSchemaSksConvertionId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionSchemaMatkulId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionSchemaStudyProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			sksConvertionSchemaMbkmProgramId: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("sks_convertion_schema");
	},
};
