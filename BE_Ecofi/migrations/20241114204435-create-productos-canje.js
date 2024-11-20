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
        type: Sequelize.INTEGER,
          references: {
          model: "emprendedores",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'        
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
      Bicolones: {
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
    await queryInterface.dropTable('Productos_Canjes');
  }
};