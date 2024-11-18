'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Historial_Recoleccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Canje: {
        type: Sequelize.INTEGER
      },
      ID_Mrecolectados: {
        type: Sequelize.INTEGER
      },
      Cantidad_Total: {
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
    await queryInterface.dropTable('Historial_Recoleccions');
  }
};