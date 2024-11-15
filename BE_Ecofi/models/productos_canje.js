'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos_Canje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Productos_Canje.init({
    ID_Emprendedor: DataTypes.INTEGER,
    ID_Usuario: DataTypes.INTEGER,
    ID_Bicolones: DataTypes.INTEGER,
    Imagen: DataTypes.BLOB,
    Stock: DataTypes.INTEGER,
    Descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Productos_Canje',
  });
  return Productos_Canje;
};