'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Canjes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuario",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'  
      },
      ID_Pcanje: {
        type: Sequelize.INTEGER,
        references: {
          model: "productos_canje",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'  
      },
      Fecha_Canje: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Canjes');
  }
};