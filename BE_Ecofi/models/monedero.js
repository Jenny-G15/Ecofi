'use strict';
const {Model, DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  class Monedero extends Model {
    
    static associate(models) {
      Monedero.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'monedero',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }
  Monedero.init({
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
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
    tableName: 'monederos',
    timestamps: true,
  });
  return Monedero;
};