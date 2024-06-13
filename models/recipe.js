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
      recipe.belongsTo(models.cooksnap, {
        foreignKey: "id_cooksnap",
        as: "cooksnap"
      });
      recipe.belongsToMany(models.jenis_makanan, {
        foreignKey: "id_jenis_makanan",
        as: "jenis_makanan"
      });
      recipe.belongsToMany(models.bahan, {
        foreignKey: "id_bahan",
        as: "bahan"
      });
      recipe.belongsToMany(models.langkah, {
        foreignKey: "id_langkah",
        as: "langkah"
      });
      recipe.belongsToMany(models.komentar, {
        foreignKey: "id_komentar",
        as: "komentar"
      });
      recipe.belongsToMany(models.reaksi, {
        foreignKey: "id_reaksi",
        as: "reaksi"
      })
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