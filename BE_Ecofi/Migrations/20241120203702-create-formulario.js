'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Formularios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Recofi: {
        type: Sequelize.INTEGER
      },
      ID_Material: {
        type: Sequelize.INTEGER
      },
      ID_Usuario: {
        type: Sequelize.INTEGER
      },
      Bicolnes_Obtenidos: {
        type: Sequelize.INTEGER
      },
      Fecha_Formulario: {
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
    await queryInterface.dropTable('Formularios');
  }
};