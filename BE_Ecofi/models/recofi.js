'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recofi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recofi.init({
    ID_Direccion: DataTypes.INTEGER,
    ID_Material: DataTypes.INTEGER,
    Horario: DataTypes.TIME,
    Latitud: DataTypes.DECIMAL,
    Longitud: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Recofi',
  });
  return Recofi;
};