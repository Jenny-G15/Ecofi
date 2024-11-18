'use strict';
const { Model, DataTypes } = require('sequelize'); // Desestructurar tanto Model como DataTypes

module.exports = (sequelize) => {
  
  class Bicolones extends Model {
 
    // Relaciones entre modelos
    static associate(models) {
      Bicolones.hasMany(models.Usuario, {
        foreignKey: 'ID_Bicolones',
        as: 'usuariosBicolones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Bicolones.hasMany(models.Productos_Canje, {
        foreignKey: 'ID_Bicolones',
        as: 'productosBicolones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }

  Bicolones.init({
    cantidad_bicolones: {
      type: DataTypes.INTEGER,  // Aquí ya puedes acceder correctamente a DataTypes
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Bicolones',
  });

  return Bicolones;
};
