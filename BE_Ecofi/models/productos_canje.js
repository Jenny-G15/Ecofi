'use strict';
const { Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Productos_Canje extends Model {

    static associate(models) {
      Productos_Canje.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'productoUsuario',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Productos_Canje.belongsTo(models.Emprendedores, {
        foreignKey: 'ID_Emprendedor',
        as: 'productoEmprendedor',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Productos_Canje.belongsTo(models.Bicolones, {
        foreignKey: 'ID_Bicolones',
        as: 'productoBicolones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Productos_Canje.init({
    ID_Emprendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Bicolones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Imagen: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Productos_Canje',
  });
  return Productos_Canje;
};