'use strict';
const { Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  
  
  class Usuario extends Model {

    static associate(models) {
 
      Usuario.hasOne(models.Monedero, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioMonedero',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Usuario.hasMany(models.Canjes, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioCanjes',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Usuario.hasMany(models.Productos_Canje, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioProductosCanje',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Usuario.hasMany(models.Recolecciones, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioRecolecciones',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Usuario.hasMany(models.Resenas, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioResenas',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });

    }
  }


  Usuario.init({
    ID_Bicolones: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Nombre_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido_Usuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cedula:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Email_usuario: {
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
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: "Usuarios",
    timestamps: true,
  });
  return Usuario;
};