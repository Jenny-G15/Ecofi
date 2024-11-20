'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Emprendedors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre_Emprendedor: {
        type: Sequelize.STRING
      },
      Descripcion: {
        type: Sequelize.STRING
      },
      Nombre_Contacto: {
        type: Sequelize.STRING
      },
      Producto_Ofrecido: {
        type: Sequelize.STRING
      },
      Correo_Emprendedor: {
        type: Sequelize.STRING
      },
      Telefono_Empresa: {
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
    await queryInterface.dropTable('Emprendedors');
  }
};