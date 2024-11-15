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
      ID_Bicolones: {
        type: Sequelize.INTEGER
      },
      Nombre_Usuario: {
        type: Sequelize.STRING
      },
      Apellido_Usuario: {
        type: Sequelize.STRING
      },
      Cedula: {
        type: Sequelize.INTEGER
      },
      Email_usuario: {
        type: Sequelize.STRING
      },
      Contraseña_Usuario: {
        type: Sequelize.INTEGER
      },
      Telefono_Usuario: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};