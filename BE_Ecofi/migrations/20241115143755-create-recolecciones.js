'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recolecciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Usuario: {
        type: Sequelize.INTEGER
      },
      ID_Recofi: {
        type: Sequelize.INTEGER
      },
      ID_Materiales: {
        type: Sequelize.INTEGER
      },
      Cantidad_Recolecciones: {
        type: Sequelize.INTEGER
      },
      Bicolones_Otenidos: {
        type: Sequelize.INTEGER
      },
      Fecha_Recoleccion: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Recolecciones');
  }
};