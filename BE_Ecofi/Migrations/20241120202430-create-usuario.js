'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre_Usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Apellido_Usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Cedula: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Email_Usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Contraseña_Usuario: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Telefono_Usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Bicolones: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal( 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};