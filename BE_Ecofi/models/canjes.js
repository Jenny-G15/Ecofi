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

      // Relación Canjes - Historial_Canjes
      Canjes.belongsTo(models.Historial_Canjes, {
        foreignKey: 'ID_Canje', 
        as: 'historialCanje',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      });
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
    ID_Canje: {
      type: DataTypes.INTEGER,
      allowNull: true, 
      references: {
        model: 'Historial_Canjes', 
        key: 'id', 
      },
    }
  }, {
    sequelize,
    modelName: 'Canjes',
    tableName: 'Canjes',
    timestamps: true,
  });

  return Canjes;
};
