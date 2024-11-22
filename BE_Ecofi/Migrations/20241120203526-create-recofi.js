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
        allowNull: false,
        references: {
          model: "Direccions",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'

      },
      ID_Material: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Materials",
          key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
      Direccion_Recofi: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('Recofis');
  }
};