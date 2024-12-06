'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Recofi extends Model {

    static associate(models) {
      Recofi.belongsTo(models.Direccion, {
        foreignKey: 'ID_Direccion', 
        as: 'direccionRecofi', 
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE',
      });

      Recofi.belongsTo(models.Material, {
        foreignKey: 'ID_Material',
        as: 'materialRecofi',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      });

      Recofi.hasMany(models.Formulario, {
        foreignKey: 'ID_Recofi',
        as: 'formularioRecofi',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',  
      });
    }
  }

  Recofi.init({
    ID_Direccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Direccions',
        key: 'id',
      }
    },
    ID_Material: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Materials',
        key: 'id',
      }
    },
    Nombre_Recofi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HorarioApertura: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    HorarioCierre: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    Latitud: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false,
    },
    Longitud: {
      type: DataTypes.DECIMAL(10,7),
      allowNull: false,
    },
    Direccion_Recofi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Recofi',
    tableName: 'Recofis',
    timestamps: true,
  });

  return Recofi;
};



























