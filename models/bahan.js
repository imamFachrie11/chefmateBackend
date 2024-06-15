'use strict';
const {
  Model
} = require('sequelize');
const recipe = require('./recipe');
module.exports = (sequelize, DataTypes) => {
  class bahan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      bahan.hasMany(models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes"
      })
    }
  }
  bahan.init({
    nama_bahan: DataTypes.TEXT,
    id_recipe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'bahan',
    underscored: true,
  });
  return bahan;
};