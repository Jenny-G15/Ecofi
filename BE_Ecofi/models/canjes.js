'use strict';
const { Model,DataTypes} = require('sequelize');
module.exports = (sequelize) => {
  class Canjes extends Model {
 
    
    static associate(models) {
      
       // Relación entre Canjes y Usuario
  Canjes.belongsTo(models.Usuario, {
    foreignKey: 'ID_Usuario',
    as: 'usuario',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });

  // Relación entre Canjes y Productos_Canje
  Canjes.belongsTo(models.Productos_Canje, {
    foreignKey: 'ID_Pcanje',
    as: 'productoCanje',
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  });
      
    }
  }
  Canjes.init({
    ID_Usuario:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Pcanje:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Fecha_Canje: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Canjes',
  });
  return Canjes;
};