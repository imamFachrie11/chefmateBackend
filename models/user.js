'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name_user: DataTypes.STRING,
    email_user: DataTypes.STRING,
    password: DataTypes.STRING,
    deskripsi_user: DataTypes.TEXT,
    gambar: DataTypes.STRING  
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};