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
        foreignKey: 'ID_Material',
        as: 'material',
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
      allowNull: false,
      references: {
        model: 'Direccion',
        key: 'id'
      }
    },
    ID_Material: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Material',
        key: 'id'
      }
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