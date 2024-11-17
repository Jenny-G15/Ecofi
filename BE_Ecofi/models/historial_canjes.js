'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial_Canjes extends Model {

    
    static associate(models) {
      // define association here
    }
  }
  Historial_Canjes.init({
    ID_Canje: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Historial_Canjes',
    tableName: "Historial_Canjes",
    timestamps: true,
  });
  return Historial_Canjes;
};