'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('academic', {
      ...ZygoteModel,
      academic_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      academic_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      academic_email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('academic')
  }
}
