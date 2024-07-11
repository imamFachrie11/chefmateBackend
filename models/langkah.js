"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class langkah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      langkah.belongsTo(models.recipe, {
        foreignKey: "id_recipe",
        as: "recipes",
      });
    }
  }
  langkah.init(
    {
      nama_langkah: DataTypes.TEXT,
      id_recipe: DataTypes.INTEGER,
      foto_langkah: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "langkah",
      underscored: true,
    }
  );
  return langkah;
};
