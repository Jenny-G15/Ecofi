'use strict';

     const fs = require('fs');
     const path = require('path');
     const sequelize = require('../db/db'); //User mi conexion existente
     const basename = path.basename(__filename);
     const db = {};

    //Cargar todos los modelos automaticamente
    fs.readdirSync(__dirname)
        .filter(file => {
          return (
              file.indexOf('.') !== 0 &&
              file !== basename &&
              file.slice(-3) === '.js' &&
              file.indexOf('.test.js') === -1
          );
      })
      .forEach(file => {
            const model = require(path.join(__dirname, file))(sequelize);
            db[model.name] = model;
      });

    Object.keys(db).forEach(modelName => {
          if (db[modelName].associate) {
                db[modelName].associate(db);
          }
    });

    db.sequelize = sequelize;

    module.exports = db;
    module.exports = sequelize;