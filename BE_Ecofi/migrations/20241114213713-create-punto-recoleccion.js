'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Punto_Recoleccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_Direccion: {
        type: Sequelize.INTEGER,
        references: {
          model: "direccion",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      ID_Materiales: {
        type: Sequelize.INTEGER,
          references: {
          model: "tipo_materiales",
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
      Horario: {
        type: Sequelize.TIME
      },
      Latitud: {
        type: Sequelize.DECIMAL
      },
      Longitud: {
        type: Sequelize.DECIMAL
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
    await queryInterface.dropTable('Punto_Recoleccions');
  }
};