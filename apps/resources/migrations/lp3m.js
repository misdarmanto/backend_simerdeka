'use strict'
/* eslint-disable @typescript-eslint/space-before-function-paren */
/* eslint-disable @typescript-eslint/no-var-requires */
const { ZygoteModel } = require('../zygote')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lp3m', {
      ...ZygoteModel,
      lp3m_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lp3m_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lp3m_email: {
        type: Sequelize.STRING,
        allowNull: false
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lp3m')
  }
}
