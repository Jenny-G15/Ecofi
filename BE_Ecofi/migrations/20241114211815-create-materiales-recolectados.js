'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Materiales_Recolectados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Material: {
        type: Sequelize.INTEGER,
         references: {
          model: "tipo_material",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      Cantidad_Mrecolectados: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE, 
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal( 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Materiales_Recolectados');
  }
};