'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Emprendedor: {
        type: Sequelize.INTEGER
      },
      Bicolones_Producto: {
        type: Sequelize.INTEGER
      },
      Imagen: {
        type: Sequelize.BLOB
      },
      Stock: {
        type: Sequelize.INTEGER
      },
      Descripcion_Producto: {
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
    await queryInterface.dropTable('Productos');
  }
};