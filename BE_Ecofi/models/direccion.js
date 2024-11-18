'use strict';

const {Model, DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  class Direccion extends Model {

    
    static associate(models) {
      Direccion.hasMany(models.Punto_Recoleccion, {
        foreignKey: 'ID_Direccion',
        as: 'puntosRecoleccion',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Direccion.init({
    Canton: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Distrito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Otras_Senas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Direccion',
    tableName: "Direccion",
    timestamps: true,
  });
  return Direccion;
};