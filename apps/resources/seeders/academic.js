"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("academic", [
			{
				academicId: "93df0b9a-8497-41d5-9f8c-370806253b09",
				academicName: "Akademik",
				academicEmail: "academic@itera.ac.id",
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("academic", null, {});
	},
};
