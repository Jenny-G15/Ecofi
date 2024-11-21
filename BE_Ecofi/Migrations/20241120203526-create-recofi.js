'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Recofis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Direccion: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ID_Material: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Horario: {
        type: Sequelize.TIME,
        allowNull: false
      },
      Latitud: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      Longitud: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recofis');
  }
};