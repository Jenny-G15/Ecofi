'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  class Material extends Model {

    static associate(models) {
      Material.hasMany(models.Formulario, {
        foreignKey: 'ID_Material',
        as: 'formularioMaterial',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Material.hasMany(models.Recofi, {
        foreignKey: 'ID_Material',
        as: 'recofiMaterial',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }

  
  Material.init({
    Tipo_Material: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Bicolones_Material: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descripcion_Material: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Material',
    tableName: 'Materials',
    timestamps: true,
  });
  return Material;
};