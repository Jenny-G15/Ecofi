'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Historial_Recoleccion extends Model {

    static associate(models) {
      // define association here
    }
  }

  Historial_Recoleccion.init({
    ID_Formulario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Fecha_Hrecoleccion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Cantidad_Hrecoleccion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Historial_Recoleccion',
    tableName:'Historial_Recoleccions',
    timestamps: true,
  });
  return Historial_Recoleccion;
};