'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class langkah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  langkah.init({
    nama_langkah: DataTypes.TEXT,
    id_recipe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'langkah',
    underscored: true,
  });
  return langkah;
};