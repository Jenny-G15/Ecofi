'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resenas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Resenas.init({
    ID_Usuario: DataTypes.INTEGER,
    ID_Recofi: DataTypes.INTEGER,
    Calificacion: DataTypes.INTEGER,
    Comentario_Resena: DataTypes.STRING,
    Fecha_Reseña: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Resenas',
  });
  return Resenas;
};