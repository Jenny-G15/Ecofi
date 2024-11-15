'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recolecciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recolecciones.init({
    ID_Usuario: DataTypes.INTEGER,
    ID_Recofi: DataTypes.INTEGER,
    ID_Materiales: DataTypes.INTEGER,
    Cantidad_Recolecciones: DataTypes.INTEGER,
    Bicolones_Otenidos: DataTypes.INTEGER,
    Fecha_Recoleccion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Recolecciones',
  });
  return Recolecciones;
};