'use strict';
const {Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {

  class Emprendedor extends Model {

    static associate(models) {
      Emprendedor.hasMany(models.Producto, {
        foreignKey: 'ID_Emprendedor',
        as: 'emprendedorProducto',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }
  Emprendedor.init({
    Nombre_Emprendedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Nombre_Contacto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Producto_Ofrecido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Correo_Emprendedor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Telefono_Empresa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ID_Direccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Direccions',
        key: 'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Emprendedor',
    tableName: 'Emprendedors',
    timestamps: true,
  });
  return Emprendedor;
};