'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Monedero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Monedero.init({
    ID_Usuario: DataTypes.INTEGER,
    Saldo_Actual: DataTypes.INTEGER,
    Ultima_Actualizacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Monedero',
  });
  return Monedero;
};