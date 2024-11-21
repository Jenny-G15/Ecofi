'use strict';
const {Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Historial_Canjes extends Model {

    static associate(models) {
      Historial_Canjes.hasMany(models.Canje, {
        foreignKey: 'ID_Canje',
        as: 'Canjes',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }


  Historial_Canjes.init({
    ID_Canje: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Historial_Canjes',
    tableName: 'Historial_Canjes',
    timestamps: true,
  });
  return Historial_Canjes;
};