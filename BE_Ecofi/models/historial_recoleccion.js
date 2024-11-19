'use strict';
const { Model, DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  class Historial_Recoleccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      
    
    }
  }
  Historial_Recoleccion.init({
    ID_Mrecolectados: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Cantidad_Total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Fecha_Recoleccion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Historial_Recoleccion',
  });
  return Historial_Recoleccion;
};