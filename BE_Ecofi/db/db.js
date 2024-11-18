const { Sequelize } = require('sequelize');
    const sequelize = new Sequelize('Ecofi', 'jenfer', '091821Jdelm.', {
            host: '127.0.0.1',
            dialect: 'mysql'
    });

module.exports = sequelize;