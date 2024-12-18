const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize('Ecofi', 'marila', 'Paz12', {
            host: '192.168.1.246',
            dialect: 'mysql'
    });

module.exports = sequelize;
