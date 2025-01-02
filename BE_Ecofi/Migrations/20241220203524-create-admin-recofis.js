'use strict';

/** @type {import('sequelize-cli').Migration} */


module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AdminRecofis', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre_AdminRecofis: {
        type: Sequelize.STRING
      },
      Apellido_AdminRecofis: {
        type: Sequelize.STRING
      },
      Correo_AdminRecofis: {
        type: Sequelize.STRING
      },
      Telefono_AdminRecofis: {
        type: Sequelize.INTEGER
      },
      Contraseña_AdminRecofis: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal( 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AdminRecofis');
  }
};