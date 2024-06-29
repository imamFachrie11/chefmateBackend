"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kategori extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // kategori.hasMany(models.recipe, {
      //   foreignKey: "id_kategori",
      //   as: "recipes",
      // });
    }
  }
  kategori.init(
    {
      nama_kategori: DataTypes.STRING,
      nama_foto_kategori: DataTypes.STRING,
      foto_kategori_url: DataTypes.STRING,
      id_recipe: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "kategori",
      underscored: true,
    }
  );
  return kategori;
};
