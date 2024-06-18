'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cooksnap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      cooksnap.hasMany(models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes"
      });
      cooksnap.hasMany(models.user, {
        foreignKey: "id_user",
        as: "users"
      })
    }
  }
  cooksnap.init({
    nama_cooknsap: DataTypes.STRING,
    gambar_cooksnap: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    id_recipe: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'cooksnap',
    underscored: true,
  });
  return cooksnap;
};