'use strict';

const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  class Recofi extends Model {

    static associate(models) {
      Recofi.hasOne(models.Direccion, {
        foreignKey: 'ID_Direccion',
        as: 'direccion',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Recofi.hasMany(models.Material, {
        foreignKey: 'ID_Recofi',
        as: 'recofi',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Recofi.hasMany(models.Formulario, {
        foreignKey: 'ID_Recofi',
        as: 'formulario',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }
  Recofi.init({
    ID_Direccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_Material: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Horario: {
      type: DataTypes.TIME,
      allowNull: false
    },
    Latitud: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Longitud: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Recofi',
    tableName: 'Recofis',
    timestamps: true,
  });
  return Recofi;
};