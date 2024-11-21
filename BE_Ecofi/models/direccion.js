'use strict';
const {Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Direccion extends Model {

    
    static associate(models) {
      Direccion.hasOne(models.Emprendedor, {
        foreignKey: 'ID_Direccion',
        as: 'direccionEmprendedor',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });

      Direccion.hasOne(models.Recofi, {
        foreignKey: 'ID_Direccion',
        as: 'direccionRecofi',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });

      Direccion.hasOne(models.Usuario, {
        foreignKey: 'ID_Direccion',
        as: 'direccionUsuario',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });

    }
  }


  Direccion.init({
    Canton: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Distrito: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Otras_Senas: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Direccion',
    tableName: 'Direccions',
    timestamps: true,
  });
  return Direccion;
};