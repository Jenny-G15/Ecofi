'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Punto_Recoleccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Direccion: {
        type: Sequelize.INTEGER
      },
      ID_Materiales: {
        type: Sequelize.INTEGER
      },
      ID_Usuario: {
        type: Sequelize.INTEGER
      },
      Horario: {
        type: Sequelize.TIME
      },
      Latitud: {
        type: Sequelize.DECIMAL
      },
      Longitud: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Punto_Recoleccions');
  }
};