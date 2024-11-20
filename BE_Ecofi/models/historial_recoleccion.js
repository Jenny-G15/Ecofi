'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Historial_Recoleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Historial_Recoleccion.init({
    ID_Formulario: DataTypes.INTEGER,
    Fecha_Hrecoleccion: DataTypes.INTEGER,
    Cantidad_Hrecoleccion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Historial_Recoleccion',
  });
  return Historial_Recoleccion;
};