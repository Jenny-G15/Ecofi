'use strict';
const { Model, DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  class Resenas extends Model {

    
    static associate(models) {
      Resenas.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'resenaUsuario',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
      Resenas.belongsTo(models.Punto_Recoleccion, {
        foreignKey: 'ID_Recofi',
        as: 'resenaPunto',
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
    }
  }
  Resenas.init({
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ID_Recofi: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Comentario_Resena: DataTypes.STRING,
    Fecha_Reseña: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Resenas',
  });
  return Resenas;
};