'use strict';
const {Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Monedero extends Model {

    static associate(models) {

    }
  }
  Monedero.init({
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Saldo_Actual: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Ultima_Actualizacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Monedero',
    tableName: "Monedero",
    timestamps: true,
  });
  return Monedero;
};