'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sks_convertion_schema_', {
      ...ZygoteModel,
      sks_convertion_schema_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_schema_sks_convertion_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_schema_matkul_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_schema_study_program_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      sks_convertion_schema_mbkm_program_id: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sks_convertion_schema_')
  }
}
