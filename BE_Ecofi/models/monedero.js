'use strict';
const {Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {

  class Monedero extends Model {
    
    static associate(models) {
      Monedero.hasOne(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'monedero',
        onUpdate:'CASCADE',
        onDelete:'SET NULL',  
      });
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
  });
  return Monedero;
};