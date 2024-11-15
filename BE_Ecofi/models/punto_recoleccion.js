'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Punto_Recoleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Punto_Recoleccion.init({
    ID_Direccion: DataTypes.INTEGER,
    ID_Materiales: DataTypes.INTEGER,
    ID_Usuario: DataTypes.INTEGER,
    Horario: DataTypes.TIME,
    Latitud: DataTypes.DECIMAL,
    Longitud: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Punto_Recoleccion',
  });
  return Punto_Recoleccion;
};