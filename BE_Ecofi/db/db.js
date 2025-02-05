const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize('Ecofi', 'root', 'Paz12', {
            host: '192.168.0.4',
            dialect: 'mysql'
    });

module.exports = sequelize;
