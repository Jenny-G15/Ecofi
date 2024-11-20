'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class Usuario extends Model {

    
    static associate(models) {
      Usuario.hasOne(models.Monedero, {
        foreignKey: 'ID_Usuario',
        as: 'monederoUsuario',
        onUpdate:'CASCADE',
        onDelete:'SET NULL',  
      });
    }
  }
  Usuario.init({
    Nombre_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cedula: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Email_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Contraseña_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Bicolones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};