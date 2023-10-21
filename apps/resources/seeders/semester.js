'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('semester', [
      {
        semester_id: 'sdds497-41d5-9f8c-370845eeee',
        semester_created_by: 'lp3m',
        semester_name: '2023/2024',
        semester_status: 'active'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('semester', null, {})
  }
}
