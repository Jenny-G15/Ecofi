'use strict';
const { Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Tipo_Material extends Model {

    
    static associate(models) {
      Tipo_Material.hasMany(models.Materiales_Recolectados, {
        foreignKey: 'ID_Material',
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
  });
  return Tipo_Material;
};