'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class AdminRecofis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AdminRecofis.init({
    Nombre_AdminRecofis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Apellido_AdminRecofis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Correo_AdminRecofis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Telefono_AdminRecofis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Contraseña_AdminRecofis: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'AdminRecofis',
  });
  return AdminRecofis;
};