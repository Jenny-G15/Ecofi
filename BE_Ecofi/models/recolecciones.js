'use strict';
const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
  class Recolecciones extends Model {

    static associate(models) {

      Recolecciones.belongsTo(models.Punto_Recoleccion, {
        foreignKey: 'ID_Recofi',
        as: 'recoleccionPunto',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Recolecciones.belongsTo(models.Tipo_Material, {
        foreignKey: 'ID_Materiales',
        as: 'recoleccionMaterial',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Recolecciones.init({
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Recofi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Materiales:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Cantidad_Recolecciones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Bicolones_Otenidos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Fecha_Recoleccion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Recolecciones',
    tableName: "Recolecciones",
    timestamps: true,
  });
  return Recolecciones;
};