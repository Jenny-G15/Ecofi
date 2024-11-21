'use strict';
const {Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Producto extends Model {

    
    static associate(models) {
      Producto.belongsTo(models.Emprendedor, {
        foreignKey: 'ID_Emprendedor',
        as: 'emprendedorPoducto',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });

      Producto.hasMany(models.Canjes, {
        foreignKey: 'ID_Producto',
        as: 'productoCanjes',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }
  Producto.init({
    ID_Emprendedor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Emprendedors',
        key: 'id'
      }
    },
    Bicolones_Producto: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Imagen: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Descripcion_Producto: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Producto',
    tableName: 'Productos',
    timestamps: true,
  });
  return Producto;
};