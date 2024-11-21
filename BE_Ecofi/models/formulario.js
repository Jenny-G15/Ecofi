'use strict';
const {Model, DataTypes} = require('sequelize');


module.exports = (sequelize) => {
  class Formulario extends Model {

    
    static associate(models) {
      Formulario.hasMany(models.Recofi, {
        foreignKey: 'ID_Recofi',
        as: 'recofi',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Formulario.hasMany(models.Material, {
        foreignKey: 'ID_Material',
        as: 'material',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Formulario.belongsTo(models.Usuario, {
        foreignKey: 'ID_Usuario',
        as: 'usuario',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
      Formulario.belongsTo(models.Historial_Recoleccion, {
        foreignKey: 'ID_Formulario',
        as: 'historialRecoleccion',
        onUpdate:'CASCADE',
        onDelete:'CASCADE',  
      });
    }
  }
  Formulario.init({
    ID_Recofi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Recofis',
        key: 'id'
      }
    },
    ID_Material: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Materials',
        key: 'id'
      }
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuarios',
        key: 'id'
      }
    },
    Bicolnes_Obtenidos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Fecha_Formulario: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Formulario',
    tableName: 'Formularios',
    timestamps: true,
  });
  return Formulario;
};