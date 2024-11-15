'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos_Canjes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Emprendedor: {
        type: Sequelize.INTEGER
      },
      ID_Usuario: {
        type: Sequelize.INTEGER
      },
      ID_Bicolones: {
        type: Sequelize.INTEGER
      },
      Imagen: {
        type: Sequelize.BLOB
      },
      Stock: {
        type: Sequelize.INTEGER
      },
      Descripcion: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Productos_Canjes');
  }
};