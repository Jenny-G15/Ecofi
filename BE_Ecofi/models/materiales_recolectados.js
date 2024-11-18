'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  class Materiales_Recolectados extends Model {

    
    static associate(models) {
      Materiales_Recolectados.belongsTo(models.Tipo_Material, {
        foreignKey: 'ID_Material',
        as: 'materialTipo',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Materiales_Recolectados.belongsTo(models.Punto_Recoleccion, {
        foreignKey: 'ID_Materiales',
        as: 'puntoRecoleccion',
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
  });
  return Materiales_Recolectados;
};