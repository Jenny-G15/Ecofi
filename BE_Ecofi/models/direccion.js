'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Direccion.init({
    Canton: DataTypes.STRING,
    Distrito: DataTypes.STRING,
    Otras_Senas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Direccion',
  });
  return Direccion;
};