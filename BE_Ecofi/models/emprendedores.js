'use strict';
const {
  Model
} = require('sequelize');
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
    Nombre_Emprendedor: DataTypes.STRING,
    Descripcion: DataTypes.STRING,
    Nombre_Contacto: DataTypes.STRING,
    Producto_Ofrecido: DataTypes.STRING,
    Correo_Emprendedor: DataTypes.STRING,
    Telefono_Empresa: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Emprendedores',
  });
  return Emprendedores;
};