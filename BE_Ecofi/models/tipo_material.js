'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  class Tipo_Material extends Model {

    
    static associate(models) {
      Tipo_Material.hasMany(models.Punto_Recoleccion, {
        foreignKey: 'ID_Precoleccion',
        as: 'PuntoRecoleccion',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Tipo_Material.hasMany(models.Recolecciones, {
        foreignKey: 'ID_Recolecciones',
        as: 'recolecciones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Tipo_Material.hasMany(models.Materiales_Recolectados, {
        foreignKey: 'ID_Mrecolectados',
        as: 'materialesRecolectados',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Tipo_Material.init({
    Nombre_Material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Bicolones_Xunidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Descripcion_Material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Tipo_Material',
    tableName: "Tipo_Material",
    timestamps: true,
  });
  return Tipo_Material;
};