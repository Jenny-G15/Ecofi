'use strict';

const { Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {

  class Canjes extends Model {
    
    
    static associate(models) {
      Canjes.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario', 
        as: 'usuarioCanjes', 
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      
      Canjes.belongsTo(models.Producto, {
        foreignKey: 'ID_Productos', 
        as: 'productosCanjes',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      Canjes.belongsTo(models.Historial_Canjes, {
        foreignKey: 'ID_Canje',
        as: 'historialCanje',
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