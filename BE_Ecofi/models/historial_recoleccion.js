'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Historial_Recoleccion extends Model {

    static associate(models) {
      Historial_Recoleccion.hasMany(models.Formulario, {
        foreignKey: 'ID_Formulario',
        as: 'formularioHRecoleccion',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }

  Historial_Recoleccion.init({
    ID_Formulario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Formularios',
        key: 'id'
      }
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