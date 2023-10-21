'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sks_convertion', {
      ...ZygoteModel,
      sks_convertion_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_created_by: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_study_program_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_mbkm_program_id: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sks_convertion')
  }
}
