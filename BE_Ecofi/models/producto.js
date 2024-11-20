'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Producto.init({
    ID_Emprendedor: DataTypes.INTEGER,
    Bicolones_Producto: DataTypes.INTEGER,
    Imagen: DataTypes.BLOB,
    Stock: DataTypes.INTEGER,
    Descripcion_Producto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Producto',
  });
  return Producto;
};