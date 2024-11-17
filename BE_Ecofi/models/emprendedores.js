'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Emprendedores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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