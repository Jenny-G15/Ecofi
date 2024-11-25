'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  class Direccion extends Model {
    
    
    
    static associate(models) {

      // Relacionar Direccion con Recofi
      Direccion.hasMany(models.Recofi, {
        foreignKey: 'ID_Direccion',
        as: 'recofis',
      });
    }
  }

  Direccion.init(
    {
      Canton: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Distrito: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Direccion',
      tableName: 'Direccions',
      timestamps: false, 
    }
  );

  return Direccion;
};
