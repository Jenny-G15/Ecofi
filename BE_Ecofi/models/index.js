'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); // Agrega esta línea para importar Sequelize
const sequelize = require('../db/db'); // Usa tu conexión existente
const basename = path.basename(__filename);
const db = {};

// Cargar todos los modelos automáticamente
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
    // Pasa `sequelize` y `Sequelize.DataTypes` al cargar cada modelo
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize; // Exporta Sequelize también

module.exports = db;
module.exports = sequelize;






















// 'use strict';

//      const fs = require('fs');
//      const path = require('path');
//      const sequelize = require('../db/db'); //User mi conexion existente
//      const basename = path.basename(__filename);
//      const db = {};

//     //Cargar todos los modelos automaticamente
//     fs.readdirSync(__dirname)
//         .filter(file => {
//           return (
//               file.indexOf('.') !== 0 &&
//               file !== basename &&
//               file.slice(-3) === '.js' &&
//               file.indexOf('.test.js') === -1
//           );
//       })
//       .forEach(file => {
//             const model = require(path.join(__dirname, file))(sequelize);
//             db[model.name] = model;
//       });

//     Object.keys(db).forEach(modelName => {
//           if (db[modelName].associate) {
//                 db[modelName].associate(db);
//           }
//     });

//     db.sequelize = sequelize;

//     module.exports = db;
//     module.exports = sequelize;
