'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  
  class Bicolones extends Model {
 
    //Relaciones entre
    static associate(models) {
      Bicolones.hasMany(models.Usuario, {
        foreignKey: 'ID_Bicolones',
        as: 'usuariosBicolones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Bicolones.hasMany(models.Productos_Canje, {
        foreignKey: 'ID_Bicolones',
        as: 'productosBicolones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Bicolones.init({
    cantidad_bicolones: {type: DataTypes.INTEGER,
    allowNull: false,
    } 
  }, {
    sequelize,
    modelName: 'Bicolones',
    tableName: "bicolones",
    timestamps: true,
  });
  return Bicolones;
};