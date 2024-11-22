'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Direccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Canton: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Distrito: {
        type: Sequelize.STRING,
        allowNull: false,
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

    // Insertar datos quemados
    await queryInterface.bulkInsert('Direccions', [
      { Canton: 'Puntarenas', Distrito: 'El Roble' },
      { Canton: 'Puntarenas', Distrito: 'Chacarita' },
      { Canton: 'Puntarenas', Distrito: 'Barranca' },
      { Canton: 'Esparza', Distrito: 'Espíritu Santo' },
      { Canton: 'Esparza', Distrito: 'San Juan Grande' },
      { Canton: 'Esparza', Distrito: 'San Rafael' },
      { Canton: 'Miramar', Distrito: 'Miramar' },
      { Canton: 'Chomes', Distrito: 'Chomes' },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Direccions');
  },
};
