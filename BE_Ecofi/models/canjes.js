'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Canjes extends Model {

    static associate(models) {
      // Relación Canjes - Usuario
      Canjes.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'usuarioCanjes',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });

      // Relación Canjes - Producto
      Canjes.belongsTo(models.Producto, {
        foreignKey: 'ID_Producto',
        as: 'productosCanjes',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
<<<<<<< HEAD
=======

      
      Canjes.hasMany(models.Historial_Canjes, {
        foreignKey: 'ID_Canje', 
        as: 'historialCanje',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
      
>>>>>>> 7691c9484147dacf91e49333ec5cca8ddb0e93de
    }
  }

  Canjes.init({
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id',
      },
    },
    ID_Producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Productos',
        key: 'id',
      },
    },
    Fecha_Canje: {
      type: DataTypes.DATE,
      allowNull: false,
    },
<<<<<<< HEAD
    ID_Historial_Canje: {
      type: DataTypes.INTEGER,
      allowNull: true, // Historial es opcional, un canje no necesariamente tiene que tener historial
      references: {
        model: 'Historial_Canjes', 
        key: 'id', 
      },
    }
=======

>>>>>>> 7691c9484147dacf91e49333ec5cca8ddb0e93de
  }, {
    sequelize,
    modelName: 'Canjes',
    tableName: 'Canjes',
    timestamps: true,
  });

  return Canjes;
};
