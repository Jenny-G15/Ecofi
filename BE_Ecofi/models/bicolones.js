'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bicolones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bicolones.init({
    cantidad_bicolones: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bicolones',
  });
  return Bicolones;
};