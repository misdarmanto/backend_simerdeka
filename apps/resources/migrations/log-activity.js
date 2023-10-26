'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('log-activities', {
      ...ZygoteModel,
      log_activity_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      log_activity_created_by: {
        type: Sequelize.STRING,
        allowNull: false
      },
      log_activity_message: {
        type: Sequelize.STRING,
        allowNull: false
      },
      log_activity_semester_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      log_activity_type: {
        type: Sequelize.ENUM('info', 'warning', 'error'),
        allowNull: false,
        defaultValue: 'info'
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('log-activities')
  }
}
