'use strict';

const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {

  class Canjes extends Model {
    
    
    static associate(models) {
      Canjes.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario', 
        as: 'usuario', 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      
      Canjes.belongsToMany(models.Productos, {
        foreignKey: 'ID_Productos', 
        as: 'productos',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Canjes.hasMany(models.Historial_Canje, {
        foreignKey: 'ID_Canje',
        as: 'historialCanjes',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      
    }
  }
  Canjes.init({
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    ID_Producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Productos',
        key: 'id'
      }
    },
    Fecha_Canje: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Canjes',
    tableName: 'Canjes',
    timestamps: true,
  });
  return Canjes;
};