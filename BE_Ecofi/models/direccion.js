'use strict';

const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Direccion.init({
    Canton: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Distrito: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Otras_Senas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Direccion',
  });
  return Direccion;
};