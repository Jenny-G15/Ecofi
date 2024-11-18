'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
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
  });
  return Historial_Canjes;
};