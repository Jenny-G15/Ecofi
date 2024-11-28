'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Usuario extends Model {

    static associate(models) {
      Usuario.hasOne(models.Monedero, {
        foreignKey: 'ID_Usuario',
        as: 'monederoUsuario',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });

      Usuario.hasMany(models.Canjes, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioCanjes',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Usuario.hasMany(models.Formulario, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioFormulario',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }
  Usuario.init({
    Nombre_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Apellido_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cedula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Email_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Contraseña_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefono_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Bicolones: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Rol_Usuario: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    timestamps: true,
  });
  return Usuario;
};