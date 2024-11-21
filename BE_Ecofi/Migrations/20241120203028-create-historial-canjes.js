'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Historial_Canjes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Canje: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Canjes",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),

      },
      updatedAt: {
        type: Sequelize.DATE, 
        allowNull: false,
        defaultValue: Sequelize.literal( 'CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),

      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Historial_Canjes');
  }
};