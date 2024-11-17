'use strict';
const { Model} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Punto_Recoleccion extends Model {

    static associate(models) {
      Punto_Recoleccion.belongsTo(models.Direccion, {
        foreignKey: 'ID_Direccion',
        as: 'puntoDireccion',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Punto_Recoleccion.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'puntoUsuario',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Punto_Recoleccion.hasMany(models.Materiales_Recolectados, {
        foreignKey: 'ID_Materiales',
        as: 'materialesRecolectados',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Punto_Recoleccion.init({
    ID_Direccion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Materiales: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Horario: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    Latitud: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    Longitud: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Punto_Recoleccion',
    tableName: "Punto_Recoleccion",
    timestamps: true,
  });
  return Punto_Recoleccion;
};