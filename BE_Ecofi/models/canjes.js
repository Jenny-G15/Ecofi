'use strict';
const { Model, DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  class Canjes extends Model {
 
    
    static associate(models) {
    Canjes.hasMany(models.Historial_Canjes, {
      foreignKey: 'ID_Canje',
      as: 'historialCanje',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
  });
      
    }
  }
  Canjes.init({
    ID_Pcanje:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Usuario:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Fecha_Canje: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Canjes',
    tableName: "Canjes",
    timestamps: true,
  });
  return Canjes;
};