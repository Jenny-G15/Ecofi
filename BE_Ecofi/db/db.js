const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize('Ecofi', 'marila', 'Paz12', {
            host: '192.168.8.114',
            dialect: 'mysql'
    });

module.exports = sequelize;
