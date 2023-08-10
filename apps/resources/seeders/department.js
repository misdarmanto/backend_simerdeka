"use strict";

const { ZygoteModel } = require("../zygote");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("department", [
			{
				...ZygoteModel,
				departmentId: "ed697f88-a372-442d-bc39-3772f544bdb5",
				departmentName: "SAINS",
				departmentEmail: "sains@itera.ac.id",
				departmentIsRegistered: false,
			},
			{
				...ZygoteModel,
				departmentId: "4181f385-6386-4f48-9a07-bf039af11175",
				departmentName: "JTIK",
				departmentEmail: "jtik@itera.ac.id",
				departmentIsRegistered: false,
			},
			{
				...ZygoteModel,
				departmentId: "9e9a3381-7459-476b-a72e-8ab053da9e99",
				departmentName: "JTPI",
				departmentEmail: "jtpi@itera.ac.id",
				departmentIsRegistered: false,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("department", null, {});
	},
};
