'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  class Materiales_Recolectados extends Model {

    
    static associate(models) {
      Materiales_Recolectados.belongsTo(models.Historial_Recoleccion, {
        foreignKey: 'ID_Hrecoleccion',
        as: 'HistorialRecoleccion',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });

    }
  }
  Materiales_Recolectados.init({
    ID_Material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cantidad_Mrecolectados: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Materiales_Recolectados',
    tableName: "Materiales_Recolectados",
    timestamps: true,
  });
  return Materiales_Recolectados;
};