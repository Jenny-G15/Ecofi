'use strict';
const { Model,DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  class Emprendedores extends Model {

    
    static associate(models) {
      Emprendedores.hasMany(models.Punto_Recoleccion, {
        foreignKey: 'ID_Direccion',
        as: 'puntosRecoleccion',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Emprendedores.init({
    Nombre_Emprendedor:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Nombre_Contacto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Producto_Ofrecido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo_Emprendedor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono_Empresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Emprendedores',
  });
  return Emprendedores;
};