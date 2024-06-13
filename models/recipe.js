'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recipe.init({
    judul: DataTypes.STRING,
    foto_recipe: DataTypes.STRING,
    porsi: DataTypes.INTEGER,
    durasi: DataTypes.INTEGER,
    id_recipe: DataTypes.INTEGER,
    id_favorite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'recipe',
    underscored: true,
  });
  return recipe;
};