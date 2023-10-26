'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('log-activities', [
      {
        log_activity_id: 'sd3423rwe-8sds7-41d5-9f8c-sd4t53rere',
        log_activity_message: 'login',
        log_activity_created_by: 'akademik',
        log_activity_semester_id: 'sdds497-41d5-9f8c-370845eeee',
        log_activity_type: 'info'
      },
      {
        log_activity_id: 'sdsa3423-3sd3d-4er-9f8c-ss4343',
        log_activity_message: 'gagal login',
        log_activity_created_by: 'lp3m',
        log_activity_semester_id: 'sdds497-41d5-9f8c-370845eeee',
        log_activity_type: 'error'
      },
      {
        log_activity_id: 'wew9uiuye-3242343d-5654-9f8c-tryr45',
        log_activity_message: 'gagal mengupload document karna melebihi batas',
        log_activity_created_by: 'lp3m',
        log_activity_semester_id: 'sdds497-41d5-9f8c-370845eeee',
        log_activity_type: 'warning'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('log-activities', null, {})
  }
}
