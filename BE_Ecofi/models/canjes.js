'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Canjes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Canjes.init({
    ID_Usuario: DataTypes.INTEGER,
    ID_Pcanje: DataTypes.INTEGER,
    Fecha_Canje: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Canjes',
  });
  return Canjes;
};