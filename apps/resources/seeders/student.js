"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("student", [
			{
				studentId: "8cd17bb9-d727-4578-99c5ssadsa",
				studentName: "Yono T.Geomatika",
				studentNim: "1323232223",
				studentEmail: "Yono.mahasiswa@mail.com",
				studentIsRegistered: false,
				studentDepartmentId: "4181f385-6386-4f48-9a07-bf039af11175",
				studentDepartmentName: "JTIK",
				studentStudyProgramId: "b1491aae-9753-4bde-9934-2c8fb987d8c8",
				studentStudyProgramName: "Teknik Geomatika",
				studentMbkmProgramId: "0d373bab-7f46-4f57-8e1b-7397d91ff0ec",
				studentTranskripId: null,
				studentSemesterId: "a7b24cf5-25e1-43d0-9381-f39f5140a91b",
			},
			{
				studentId: "8cd17bb9-d727-4578-99c5-a223296d55b8",
				studentName: "Eka Matematika",
				studentNim: "124545444",
				studentEmail: "eka.mahasiswa@mail.com",
				studentIsRegistered: false,
				studentDepartmentId: "ed697f88-a372-442d-bc39-3772f544bdb5",
				studentDepartmentName: "SAINS",
				studentStudyProgramId: "30b3c037-7d11-4a60-a039-ab09b007fd94",
				studentStudyProgramName: "Matematika",
				studentMbkmProgramId: null,
				studentTranskripId: null,
				studentSemesterId: "a7b24cf5-25e1-43d0-9381-f39f5140a91b",
			},
			{
				studentId: "46cbc5cd-8f15-4777-a7c1-84767ec2342f",
				studentName: "Budi T.Telekomunikasi",
				studentNim: "1254343434",
				studentEmail: "budi.mahasiswa@mail.com",
				studentIsRegistered: false,
				studentDepartmentId: "9e9a3381-7459-476b-a72e-8ab053da9e99",
				studentDepartmentName: "JTIP",
				studentStudyProgramId: "8db52aa9-b4f4-4909-97d3-43638d48ce2a",
				studentStudyProgramName: "Teknik Telekomunikasi",
				studentMbkmProgramId: "973d80a8-c4b9-4d73-9719-18e7e088995c",
				studentTranskripId: null,
				studentSemesterId: "a7b24cf5-25e1-43d0-9381-f39f5140a91b",
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("student", null, {});
	},
};
