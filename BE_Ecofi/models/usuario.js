'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    ID_Bicolones: DataTypes.INTEGER,
    Nombre_Usuario: DataTypes.STRING,
    Apellido_Usuario: DataTypes.STRING,
    Cedula: DataTypes.INTEGER,
    Email_usuario: DataTypes.STRING,
    Contraseña_Usuario: DataTypes.INTEGER,
    Telefono_Usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};