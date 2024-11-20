'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formulario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Formulario.init({
    ID_Recofi: DataTypes.INTEGER,
    ID_Material: DataTypes.INTEGER,
    ID_Usuario: DataTypes.INTEGER,
    Bicolnes_Obtenidos: DataTypes.INTEGER,
    Fecha_Formulario: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Formulario',
  });
  return Formulario;
};