'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mbkm_program_type', {
      ...ZygoteModel,
      mbkm_program_type_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mbkm_program_type_name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mbkm_program_type')
  }
}
