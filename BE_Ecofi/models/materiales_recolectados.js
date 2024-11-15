'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materiales_Recolectados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Materiales_Recolectados.init({
    ID_Material: DataTypes.INTEGER,
    Cantidad_Mrecolectados: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materiales_Recolectados',
  });
  return Materiales_Recolectados;
};